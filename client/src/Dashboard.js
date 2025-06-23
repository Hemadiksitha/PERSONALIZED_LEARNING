import React, { useState } from "react";
import QuizApp from "./Quiz";
import CodeEditor from "./CodeEditor";

const Dashboard = ({ user, handleLogout }) => {
  const [view, setView] = useState("");

  if (view === "quiz") return <QuizApp user={user} />;
  if (view === "editor") return <CodeEditor user={user} />;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Welcome, {user.username}</h2>
      <p>Select an option:</p>
      <button
        onClick={() => setView("quiz")}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Take Quiz
      </button>
      <button
        onClick={() => setView("editor")}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Open Code Editor
      </button>
      <br />
      <button
        onClick={handleLogout}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
