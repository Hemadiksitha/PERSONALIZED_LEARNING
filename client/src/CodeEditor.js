import { useEffect } from "react";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const serverUrl = "http://localhost:4000";

const CodeEditor = ({ user }) => {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("python");
  const [topic, setTopic] = useState("arrays");
  const [questionData, setQuestionData] = useState(null);
  const [customInput, setCustomInput] = useState("");
  const [output, setOutput] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [correctStreak, setCorrectStreak] = useState(0);
  const [incorrectStreak, setIncorrectStreak] = useState(0);
  const [runComplete, setRunComplete] = useState(false);
  const [shouldFetchNext, setShouldFetchNext] = useState(false);
  const [showTestCases, setShowTestCases] = useState(false);
  const [testCaseUnlockable, setTestCaseUnlockable] = useState(false);

  const testCases = useRef([]);
  const expectedOutputs = useRef([]);
  const langMap = { python: "python", java: "java", c: "cpp" };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.setValue("// Start coding...\n");
  };

  const fetchQuestion = async () => {
    try {
      const res = await axios.post(`${serverUrl}/api/questions`, {
        level: difficulty,
        topic,
      });
      const data = res.data;
      if (data.error) {
        setQuestionData(null);
        editorRef.current.setValue("// Error loading question...");
        return;
      }
      setQuestionData(data);
      testCases.current = data.testCases || [];
      expectedOutputs.current = data.expectedOutputs || [];
      editorRef.current.setValue(`${langMap[language] === "python" ? "#" : "//"} ${data.question}\n\n`);
      setCustomInput("");
      setOutput("");
      setRunComplete(false);
      setShowTestCases(false);
      setTestCaseUnlockable(false);
    } catch (err) {
      setQuestionData(null);
      editorRef.current.setValue("// Error loading question...");
    }
  };

  const runCode = async () => {
    const code = editorRef.current.getValue();
    try {
      const res = await axios.post(`${serverUrl}/api/run-code`, {
        language,
        code,
        testCases: [],
        expectedOutputs: [],
        level: difficulty,
        mode: "run",
        customInput,
      });
      const data = res.data;
      setOutput(data.error ? "Error: " + data.error : data.results.join("\n"));
      setRunComplete(false);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  const submitCode = async () => {
    const code = editorRef.current.getValue();
    try {
      const res = await axios.post(`${serverUrl}/api/run-code`, {
        language,
        code,
        testCases: testCases.current,
        expectedOutputs: expectedOutputs.current,
        level: difficulty,
      });
      const data = res.data;
      if (data.error) {
        setOutput("Error: " + data.error);
        return;
      }
      const score = data.score;
      const maxScore = data.totalTestCases * data.pointsPerTestCase;

      if (score === maxScore) {
        setCorrectStreak((prev) => prev + 1);
        setIncorrectStreak(0);
      } else {
        setIncorrectStreak((prev) => prev + 1);
        setCorrectStreak(0);
      }

      const resultHTML = data.results.join("\n");
      setOutput(`${resultHTML}\n\n🎯 Score: ${score}/${maxScore}`);
      setRunComplete(true);
      setTestCaseUnlockable(true);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  const nextQuestion = () => {
    if (!runComplete) return;

    let changed = false;

    if (correctStreak >= 2 && difficulty !== "hard") {
      setDifficulty((prev) => (prev === "easy" ? "medium" : "hard"));
      setCorrectStreak(0);
      changed = true;
    } else if (incorrectStreak >= 2 && difficulty !== "easy") {
      setDifficulty((prev) => (prev === "hard" ? "medium" : "easy"));
      setIncorrectStreak(0);
      changed = true;
    }

    if (!changed) {
      fetchQuestion();
    } else {
      setShouldFetchNext(true);
    }

    setRunComplete(false);
    setShowTestCases(false);
    setTestCaseUnlockable(false);
  };

  useEffect(() => {
    if (shouldFetchNext) {
      fetchQuestion();
      setShouldFetchNext(false);
    }
  }, [difficulty]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", height: "100vh", backgroundColor: "#f0f2f5" }}>
      <div style={{ padding: "20px", backgroundColor: "#ffffff", borderRight: "1px solid #ddd", overflowY: "auto" }}>
        <h2 style={{ marginBottom: "10px" }}>🧠 Adaptive Code Editor</h2>
        <p>👋 Welcome, <strong>{user.username}</strong></p>

        <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fafafa" }}>
          <label>Language:</label><br />
          <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ width: "100%", marginBottom: "10px" }}>
            <option value="python">🐍 Python</option>
            <option value="c">🌐 C</option>
            <option value="java">☕ Java</option>
          </select>

          <label>Topic:</label><br />
          <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ width: "100%", marginBottom: "10px" }}>
            <option value="arrays">Arrays</option>
            <option value="strings">Strings</option>
            <option value="dp">Dynamic Programming</option>
            <option value="trees">Trees</option>
            <option value="graphs">Graphs</option>
          </select>

          <label>Difficulty:</label><br />
          <div style={{ fontWeight: "bold", color: "#333", marginBottom: "10px" }}>{difficulty}</div>

          <button onClick={fetchQuestion} style={{ width: "100%", backgroundColor: "#007bff", color: "white", border: "none", padding: "10px", borderRadius: "6px" }}>
            🎯 Get Question
          </button>
        </div>

        {questionData && (
          <div>
            <h3>📘 {questionData.title || "Untitled"}</h3>
            <p>{questionData.question}</p>
            {questionData.sampleInputs?.map((input, i) => (
              <div key={i} style={{ background: "#f9f9f9", border: "1px solid #ddd", borderRadius: "6px", marginBottom: "10px", padding: "10px" }}>
                <strong>Example {i + 1}</strong>
                <p><strong>Input:</strong> {input}</p>
                <p><strong>Output:</strong> {questionData.sampleOutputs[i]}</p>
                <p><strong>Explanation:</strong> {questionData.explanations[i]}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: "20px", overflowY: "auto" }}>
        <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #ccc", marginBottom: "10px" }}>
          <Editor
            height="50vh"
            language={langMap[language]}
            theme="vs-dark"
            onMount={handleEditorDidMount}
          />
        </div>

        <textarea
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="Custom input..."
          style={{ width: "100%", marginTop: "10px", padding: "10px", fontFamily: "monospace", height: "100px", border: "1px solid #ccc", borderRadius: "6px" }}
        />

        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <button onClick={runCode} style={{ padding: "10px 20px", backgroundColor: "#343a40", color: "white", border: "none", borderRadius: "5px" }}>
            ▶️ Run
          </button>
          <button onClick={submitCode} style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
            📤 Submit
          </button>
          <button onClick={nextQuestion} style={{ padding: "10px 20px", backgroundColor: "#6f42c1", color: "white", border: "none", borderRadius: "5px" }}>
            ➡️ Next
          </button>
        </div>

        <h3 style={{ marginTop: "20px" }}>🖨 Output</h3>
        <pre style={{ backgroundColor: "#1e1e1e", color: "#e8e8e8", padding: "15px", borderRadius: "8px", fontSize: "14px", maxHeight: "200px", overflowY: "auto" }}>
          {output}
        </pre>

        {testCaseUnlockable && !showTestCases && (
          <button
            onClick={() => setShowTestCases(true)}
            style={{ marginTop: "15px", backgroundColor: "#ff9800", color: "white", padding: "10px 16px", borderRadius: "6px", border: "none" }}>
            🔓 Unlock Test Cases
          </button>
        )}

        {showTestCases && (
          <div style={{ marginTop: "15px" }}>
            <h3>🧪 Test Cases</h3>
            {testCases.current.length > 0 ? (
              testCases.current.map((tc, i) => (
                <div key={i} style={{ backgroundColor: "#2d2d2d", color: "#f1f1f1", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
                  <strong>Test Case {i + 1}</strong>
                  <p><strong>Input:</strong> {tc}</p>
                  <p><strong>Expected Output:</strong> {expectedOutputs.current[i]}</p>
                </div>
              ))
            ) : (
              <p>No test cases available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;