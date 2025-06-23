import axios from "axios";

// ✅ CHANGE this for local or Render
// Local: "http://127.0.0.1:5000"
// Render: "https://quiz-backend-fzn8.onrender.com"
const API_URL = "http://127.0.0.1:5000";

// ✅ Helper for Authorization headers
const authHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found. User might not be logged in.");
  }
  return { headers: { Authorization: `Bearer ${token}` } };
};

// ✅ Get a new quiz question from your LLM-powered backend
export const getQuiz = async (topic, difficulty, subtopic) => {
  try {
    const response = await axios.post(`${API_URL}/quiz`, {
      topic,
      difficulty,
      subtopic,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching quiz question:", error);
    throw error;
  }
};

// ✅ Save user progress (needs JWT)
export const saveProgress = async (username, progress) => {
  try {
    const response = await axios.post(
      `${API_URL}/progress`,
      {
        username,
        ...progress,
      },
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("❌ Error saving progress:", error);
    throw error;
  }
};

// ✅ Get user progress (needs JWT)
export const getProgress = async (username) => {
  try {
    const response = await axios.get(
      `${API_URL}/progress/${username}`,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error(`❌ Error fetching progress for ${username}:`, error);
    throw error;
  }
};

// ✅ Register new user
export const signupUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Signup error:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Login user and store JWT for future calls
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("❌ Login error:", error.response?.data || error.message);
    throw error;
  }
};
