# ADAPTIVE AND PERSONALIZED AI-BASED MCQ AND CODE EDITOR PLATFORM TAILORED FOR CSE PLACEMENTS

A unified web platform providing personalized multiple-choice question (MCQ) practice and an adaptive code editor to help Computer Science & Engineering (CSE) students prepare effectively for placements and technical interviews.

---

## 📁 Project Structure

    unifiedplatform/
    ├── client/ # Frontend - React App for the user interface
    ├── editor-backend/ # Backend - Node.js Express server for the adaptive code editor API
    ├── quiz-backend/ # Backend - Python Flask server for AI-driven MCQ generation and evaluation
    ├── README.md # Project documentation
    ├── .gitignore # Git ignore rules


---

## ✅ Features

### 📌 **MCQ Quiz Module**
- Topic-wise and subtopic-wise MCQs for core DSA concepts
- Adaptive difficulty:
  - Increases if a user answers correctly
  - Decreases if a user struggles
- Tracks progress and displays score charts
- Allows stopping quiz anytime with saved progress
- Generates detailed hints dynamically and gives feedback
- Stores user submissions for review

### 📌 **Adaptive Code Editor**
- Built-in code editor for solving coding questions
- Multi-language support (Python, C, Java)
- Adaptive question generation based on user performance
- Real-time test case evaluation
- Options to submit the code and also run custom input
- Unlock test cases when partial gets failed

### 📌 **Unified Dashboard**
- Single login to access both MCQ practice and code editor
- Personalized learning path
- User-friendly interface with modern design

---

## ⚙️ Installation Steps (Detailed)

### ✅ **Prerequisites**
- Node.js & npm
- Python 3.x
- pip (Python package manager)

### ✅ **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Hemadiksitha/PERSONALIZED_LEARNING.git
cd PERSONALIZED_LEARNING

### ✅ **2️⃣ Setup Frontend (client)**

```bash
cd client
npm install
npm run build   # Optional: To build production version
# For development:
npm start

### ✅ **3️⃣ Setup Editor Backend (editor-backend)**
Open a new terminal, then:

```bash
cd editor-backend
npm install
# Create a `.env` file for sensitive configs if needed
node app.js

This starts the Node.js backend for the adaptive code editor.

### ✅ **4️⃣ Setup Quiz Backend (quiz-backend)**
Open another new terminal, then:

```bash
cd quiz-backend
# (Optional but recommended) Create a virtual environment:
# python -m venv venv
# source venv/bin/activate  (Linux/Mac)
# venv\Scripts\activate     (Windows)

pip install -r requirements.txt

# Run Flask server
python app.py

This starts the Python backend for MCQ generation & evaluation.

### ✅ **5️⃣ Access the Platform**
    Frontend: http://localhost:3000

    Editor API: usually http://localhost:5000

    Quiz API: usually http://localhost:5001

---

## 🚀 Usage
    Register/Login using the unified dashboard.
    Select desired topics and difficulty level for quizzes.
    Answer MCQs; the system adjusts difficulty in real-time.
    Switch to the Code Editor tab to solve adaptive coding questions.
    Submit code, check results, and view hints.
    Track progress and revisit attempted questions anytime.

## 🛠️ Technologies Used

| Component           | Technology                                         |
| ------------------- | -------------------------------------------------- |
| **Frontend**        | React.js, HTML, CSS, JavaScript                    |
| **Editor Backend**  | Node.js, Express.js, MongoDB (or file-based)       |
| **Quiz Backend**    | Python, Flask, NLP Libraries (spaCy, transformers) |
| **Styling**         | CSS, Bootstrap (optional)                          |
| **Version Control** | Git & GitHub                                       |

## 🤝 Contributing
Contributions are welcome! 🚀
    To contribute:
    Fork this repository.
    Create a new branch (git checkout -b feature-branch).
    Commit your changes (git commit -m 'Add new feature').
    Push to your branch (git push origin feature-branch).
    Create a Pull Request.

### 📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

### 📬 Contact
For questions, ideas, or collaboration, feel free to reach out:
GitHub: Hemadiksitha
Email: hema.diksitha@gmail.com