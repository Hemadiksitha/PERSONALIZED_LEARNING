import React, { useState, useEffect } from "react";
import { signupUser, loginUser } from "./api";
import QuizApp from "./Quiz";
import CodeEditor from "./CodeEditor";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [view, setView] = useState(""); // NEW: for choosing quiz/editor

  // ✅ Load saved user from localStorage on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("quizUser");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignup = async () => {
    try {
      const res = await signupUser(username, password);
      setMessage(res.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(username, password);
      setMessage(res.message);
      if (res && (res.success || res.token || res.message.includes("success"))) {
        const newUser = { username, token: res.token };
        setIsLoggedIn(true);
        setUser(newUser);
        localStorage.setItem("quizUser", JSON.stringify(newUser)); // ✅ Save to localStorage
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setUser(null);
    setView(""); // Reset selected view
    localStorage.removeItem("quizUser"); // ✅ Clear localStorage
    setMessage("Logged out successfully.");
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div
          className="auth-container"
          style={{
            maxWidth: "400px",
            margin: "2rem auto",
            textAlign: "center",
          }}
        >
          <h2>Login / Signup</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", margin: "10px", width: "100%" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", margin: "10px", width: "100%" }}
          />
          <button
            onClick={handleSignup}
            style={{
              margin: "10px",
              padding: "10px 20px",
              background: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
          <button
            onClick={handleLogin}
            style={{
              margin: "10px",
              padding: "10px 20px",
              background: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          {message && (
            <p style={{ marginTop: "10px", color: "#555" }}>{message}</p>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleLogout}
            style={{
              margin: "20px",
              padding: "10px 20px",
              background: "#dc3545",
              color: "white",
              border: "none",
              cursor: "pointer",
              float: "right",
            }}
          >
            Logout
          </button>

          {/* View Selection */}
          {!view && (
            <>
              <h2>Welcome, {user.username}</h2>
              <p>Select what you want to do:</p>
              <button
                onClick={() => setView("quiz")}
                style={{
                  margin: "10px",
                  padding: "10px 20px",
                  background: "#17a2b8",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Take Quiz
              </button>
              <button
                onClick={() => setView("editor")}
                style={{
                  margin: "10px",
                  padding: "10px 20px",
                  background: "#6f42c1",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Open Code Editor
              </button>
            </>
          )}

          {/* Quiz or Editor View */}
          {view === "quiz" && <QuizApp user={user} />}
          {view === "editor" && <CodeEditor user={user} />}
        </div>
      )}
    </div>
  );
};

export default App;
