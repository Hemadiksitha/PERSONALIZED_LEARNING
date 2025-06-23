from flask import Flask, request, jsonify
import requests
import bcrypt
import jwt
import datetime
import random
from functools import wraps
from pymongo import MongoClient

from flask_cors import CORS
CORS(app := Flask(__name__))

# Secret key for JWT
app.config['SECRET_KEY'] = 'your_super_secret_key'  # Use strong key in prod

# MongoDB setup
client = MongoClient(
    "mongodb+srv://hemadiksitha:HV@hema.arbgjdb.mongodb.net/?retryWrites=true&w=majority&tls=true"
)
db = client.mcq_quiz
progress_collection = db.user_progress
users_collection = db.users

try:
    client.admin.command('ping')
    print("✅ MongoDB Connected Successfully!")
except Exception as e:
    print(f"❌ MongoDB Connection Failed: {e}")

# ✅ JWT Required Decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if token and token.startswith("Bearer "):
            token = token.split(" ")[1]
        else:
            return jsonify({"error": "Token is missing!"}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = data['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 401

        return f(current_user, *args, **kwargs)
    return decorated

def generate_mcq_with_ollama(topic, subtopic, difficulty):
    prompt = f"""
You are an expert computer science educator.

Here are examples of good MCQs:

---
Question: Which of these statements about arrays is TRUE?
Options:
A) Arrays can store multiple data types.
B) Array elements are stored in contiguous memory.
C) Array size can be increased dynamically in C.
D) Arrays do not allow indexing.
Answer: B
Explanation: Arrays use contiguous memory allocation.
Hint: Think about how array elements are placed in memory.
---

Question: What will be the output of this code?
int arr[] = {{1, 2, 3}};
printf("%d", arr[1]);
Options:
A) 1
B) 2
C) 3
D) Compilation Error
Answer: B
Explanation: arr[1] refers to the second element which is 2.
Hint: Remember array indexing starts from 0.
---

Now, generate ONE NEW, UNIQUE, NON-REPEATED, HIGH-QUALITY MCQ for:
Topic: {topic}
Subtopic: {subtopic}
Difficulty: {difficulty}

Requirements:
- Use different question formats: theory, code output, debugging, reasoning.
- Use realistic examples, varied numbers, and diverse scenarios.
- Do not repeat previous structure or wording.
- Strictly follow this format:
Question: ...
Options:
A) ...
B) ...
C) ...
D) ...
Answer: (A/B/C/D)
Explanation: ...
Hint: ...
No extra text.
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        }
    )
    return response.json()['response']



def user_exists(username):
    return users_collection.find_one({"username": username}) is not None

# ✅ Signup
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    if user_exists(username):
        return jsonify({"error": "Username already exists"}), 409

    hashed_pw = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    users_collection.insert_one({
        "username": username,
        "password": hashed_pw
    })

    return jsonify({"message": "User registered successfully!"}), 201

# ✅ Login
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    user = users_collection.find_one({"username": username})
    if not user:
        return jsonify({"error": "Invalid username or password"}), 401

    if bcrypt.checkpw(password.encode("utf-8"), user["password"]):
        token = jwt.encode({
            "user_id": username,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)
        }, app.config['SECRET_KEY'], algorithm="HS256")

        return jsonify({"success": True, "message": "Login successful", "token": token}), 200

    return jsonify({"error": "Invalid username or password"}), 401

# ✅ New Quiz Endpoint — uses random placement prompt
@app.route("/quiz", methods=["POST"])
def get_mcqs():
    data = request.json
    topic, difficulty, subtopic = data["topic"], data["difficulty"], data["subtopic"]

    mcq_text = generate_mcq_with_ollama(topic, subtopic, difficulty)
    return jsonify({"mcq": mcq_text})

# ✅ Save progress
@app.route("/progress", methods=["POST"])
def save_progress():
    data = request.json
    username = data.get("username")
    session_subtopics = data.get("subtopics", {})

    if not username or not isinstance(session_subtopics, dict):
        return jsonify({"error": "Missing or invalid data"}), 400

    try:
        existing = progress_collection.find_one({"username": username}) or {
            "subtopics": {},
            "score": 0,
            "total_questions": 0
        }

        merged = existing.get("subtopics", {})
        for subtopic, session_stats in session_subtopics.items():
            s_correct = session_stats.get("correct", 0)
            s_total = session_stats.get("total", 0)
            prev = merged.get(subtopic, {"correct": 0, "total": 0})
            merged[subtopic] = {
                "correct": prev["correct"] + s_correct,
                "total": prev["total"] + s_total
            }

        total_correct = sum(sub["correct"] for sub in merged.values())
        total_questions = sum(sub["total"] for sub in merged.values())

        progress_collection.update_one(
            {"username": username},
            {
                "$set": {
                    "subtopics": merged,
                    "score": total_correct,
                    "total_questions": total_questions
                }
            },
            upsert=True
        )

        return jsonify({"message": "Progress saved!"}), 200

    except Exception as e:
        return jsonify({"error": f"Failed to save progress: {str(e)}"}), 500

# ✅ Get progress (protected)
@app.route("/progress/<username>", methods=["GET"])
@token_required
def get_progress(current_user, username):
    if current_user != username:
        return jsonify({"error": "Unauthorized access"}), 403

    progress = progress_collection.find_one({"username": username}, {"_id": 0})
    if not progress:
        progress = {"username": username, "score": 0, "total_questions": 0, "subtopics": {}}

    return jsonify(progress)

# ✅ Verify token
@app.route("/verify-token", methods=["GET"])
@token_required
def verify_token(current_user):
    return jsonify({"message": "Token is valid", "user_id": current_user}), 200

if __name__ == "__main__":
    app.run(debug=True)
