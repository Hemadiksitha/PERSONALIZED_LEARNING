import React, { useState, useEffect, useRef } from "react";
import {
  getQuiz,
  saveProgress,
  getProgress
} from "./api";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  Label
} from "recharts";
import { motion } from "framer-motion";
import "./QuizApp.css";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const staticTopics = ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"];
const staticSubtopics = {
  "Arrays": ["Two Pointers", "Sliding Window", "Kadane's Algorithm", "Binary Search"],
  "Strings": ["Pattern Matching", "Anagram Checking", "Palindrome", "String Compression"],
  "Linked Lists": ["Basic Operations", "Cycle Detection", "Reverse Linked List", "Intersection Point"],
  "Stacks": ["Balanced Parentheses", "Next Greater Element", "Stack Using Queues"],
  "Queues": ["Circular Queue", "Queue Using Stacks", "LRU Cache"],
  "Trees": ["Binary Tree Traversals", "Binary Search Tree", "Lowest Common Ancestor", "Tree Height"],
  "Graphs": ["DFS", "BFS", "Shortest Path", "Topological Sort"]
};

const QuizApp = ({ user }) => {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState(0);

  const [subtopicProgress, setSubtopicProgress] = useState({});
  const [sessionSubtopicProgress, setSessionSubtopicProgress] = useState({});

  const [quizActive, setQuizActive] = useState(false);
  const [difficulty, setDifficulty] = useState("Easy");
  const [correctStreak, setCorrectStreak] = useState(0);
  const [wrongStreak, setWrongStreak] = useState(0);

  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);
  const isHandlingAnswerRef = useRef(false);
  const [quizHistory, setQuizHistory] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(false);

  const [totalQuizQuestions] = useState(10);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

  const [earnedBadges, setEarnedBadges] = useState([]);
  const [showBadgePopup, setShowBadgePopup] = useState(false);
  const pieChartRef = useRef();
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [answerStatus, setAnswerStatus] = useState({ correct: false, explanation: "" });
  const [nextLevelAfterAnswer, setNextLevelAfterAnswer] = useState("Easy");

  useEffect(() => {
    setTopics(staticTopics);
  }, []);

  useEffect(() => {
    if (selectedTopic) {
      setSubtopics(staticSubtopics[selectedTopic] || []);
    }
  }, [selectedTopic]);

  useEffect(() => {
    if (user) {
      getProgress(user.username)
        .then(data => {
          setScore(data.score || 0);
          setTotalQuestions(data.total_questions || 0);
          setSubtopicProgress(data.subtopics || {});
        })
        .catch(console.error);
    }
  }, [user]);

  useEffect(() => {
    if (quizActive && currentQuestion) {
      setTimeLeft(30);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [currentQuestion]);

  const parseLLMResponse = (text) => {
    const questionMatch = text.match(/Question:\s*([\s\S]*?)(?=(A\)|$))/i);
    const question = questionMatch ? questionMatch[1].trim() : "";
    let code = "";
    const codeMatch = question.match(/```([\s\S]*?)```/);
    if (codeMatch) {
      code = codeMatch[1].trim();
    }
    const questionText = code ? question.replace(/```[\s\S]*?```/, "").trim() : question;
    const options = [
      text.match(/A\)\s*(.+)/i)?.[1],
      text.match(/B\)\s*(.+)/i)?.[1],
      text.match(/C\)\s*(.+)/i)?.[1],
      text.match(/D\)\s*(.+)/i)?.[1],
    ];
    const answer = text.match(/Answer:\s*([A-D])/i)?.[1] || "";
    const explanation = text.match(/Explanation:\s*(.+)/i)?.[1] || "";
    const hint = text.match(/Hint:\s*(.+)/i)?.[1] || "";
    return { question: questionText, code, options, answer, explanation, hint };
  };

  const startQuiz = () => {
    if (!selectedTopic || !selectedSubtopic) {
      alert("Please select a topic and subtopic first!");
      return;
    }
    setQuizActive(true);
    setDifficulty("Easy");
    setCorrectStreak(0);
    setWrongStreak(0);
    setSessionScore(0);
    setSessionQuestions(0);
    setSessionSubtopicProgress({});
    setQuizHistory([]);
    setCurrentQuestionNumber(1);
    fetchNewQuestion("Easy");
  };

  const stopQuiz = () => {
  isHandlingAnswerRef.current = false;
  setQuizActive(false);
  clearInterval(timerRef.current);

  // ✅ AWARD BADGE if sessionScore >= 7 for 10 questions
  if (sessionScore >= 7 && !earnedBadges.includes("High Scorer")) {
    setEarnedBadges(prev => [...prev, "High Scorer"]);
    alert("🏅 High Scorer! You scored 7 or more in this session!");
  }

  const updatedScore = score + sessionScore;
  const updatedTotal = totalQuestions + sessionQuestions;
  setScore(updatedScore);
  setTotalQuestions(updatedTotal);

  saveProgress(user.username, {
    score: sessionScore,
    total_questions: sessionQuestions,
    subtopics: sessionSubtopicProgress
  })
    .then(() =>
      getProgress(user.username).then(res => {
        setScore(res.score || 0);
        setTotalQuestions(res.total_questions || 0);
        setSubtopicProgress(res.subtopics || {});
      })
    )
    .catch(console.error);

  alert(`🎯 Quiz Stopped! Final Score: ${sessionScore}/${sessionQuestions}`);
};


  const fetchNewQuestion = (level) => {
    setLoading(true);
    setCurrentQuestion(null);
    getQuiz(selectedTopic, level, selectedSubtopic).then(res => {
      const parsed = parseLLMResponse(res.mcq);
      setCurrentQuestion(parsed);
      setShowHint(false);
      setLoading(false);
    });
  };

  const handleTimeout = () => {
    if (!currentQuestion || isHandlingAnswerRef.current) return;
    isHandlingAnswerRef.current = true;
    alert(`⏱️ Time's up! Correct: ${currentQuestion.answer}`);
    handleAnswerClick("TIMEOUT", true);
  };

  const handleAnswerClick = (selectedOption, isTimeout = false) => {
  if (!currentQuestion || (!isTimeout && isHandlingAnswerRef.current)) return;
  isHandlingAnswerRef.current = true;
  clearInterval(timerRef.current);

  const correctAnswer = currentQuestion.answer;
  let nextLevel = difficulty;
  const isCorrect = selectedOption === correctAnswer;

  // Save in history
  setQuizHistory(prev => [
    ...prev,
    {
      question: currentQuestion.question,
      options: currentQuestion.options,
      selectedOption,
      correctAnswer
    }
  ]);

  // Update streaks & badges
  if (!isTimeout && isCorrect) {
    const newStreak = correctStreak + 1;
    setCorrectStreak(newStreak);
    setSessionScore(s => s + 1);
    setWrongStreak(0);

    if (newStreak === 7 && !earnedBadges.includes("Champion Streak")) {
      setEarnedBadges(prev => [...prev, "Champion Streak"]);
      alert("🏅 Champion Streak! 7 in a row!");
    }

    if (sessionScore + 1 === totalQuizQuestions && sessionQuestions + 1 === totalQuizQuestions && !earnedBadges.includes("Perfect Score")) {
      setEarnedBadges(prev => [...prev, "Perfect Score"]);
      alert("🏆 Perfect Score!");
    }

    if (newStreak >= 3) {
      nextLevel = difficulty === "Easy" ? "Medium" : difficulty === "Medium" ? "Hard" : "Hard";
      setCorrectStreak(0);
    }

  } else {
    setWrongStreak(s => s + 1);
    setCorrectStreak(0);
    if (wrongStreak + 1 >= 3) {
      nextLevel = difficulty === "Hard" ? "Medium" : "Easy";
      setWrongStreak(0);
    }
  }

  // Update subtopic progress
  setSessionQuestions(s => s + 1);
  setSessionSubtopicProgress(prev => ({
    ...prev,
    [selectedSubtopic]: {
      correct: (prev[selectedSubtopic]?.correct || 0) + (isCorrect ? 1 : 0),
      total: (prev[selectedSubtopic]?.total || 0) + 1
    }
  }));

  // ✅ Show modal with status
  setAnswerStatus({
    correct: isCorrect,
    explanation: currentQuestion.explanation
  });
  setNextLevelAfterAnswer(nextLevel);
  setShowAnswerModal(true);
};


  const handleReportSubmit = () => {
    setShowReportModal(false);
    setReportReason("");
    fetchNewQuestion(difficulty);
  };

  const exportToPDF = async () => {
    const doc = new jsPDF();
    doc.setFontSize(18).text(`Quiz Report - ${user?.username || "Anonymous"}`, 14, 15);
    doc.setFontSize(12).text(`Date: ${new Date().toLocaleString()}`, 14, 25);
    doc.text(`Topic: ${selectedTopic}`, 14, 33);
    doc.text(`Subtopic: ${selectedSubtopic}`, 14, 40);
    if (pieChartRef.current) {
      const canvas = await html2canvas(pieChartRef.current);
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 14, 50, 80, 80);
    }
    const correct = score;
    const incorrect = Math.max(totalQuestions - score, 0);
    const percent = totalQuestions > 0 ? ((correct / totalQuestions) * 100).toFixed(2) : 0;
    doc.text(`Correct: ${correct}`, 100, 60);
    doc.text(`Incorrect: ${incorrect}`, 100, 68);
    doc.text(`Accuracy: ${percent}%`, 100, 76);
    autoTable(doc, {
      head: [["#", "Question", "Options", "Your Answer", "Result", "Correct Answer"]],
      body: quizHistory.map((q, i) => [
        i + 1,
        q.question,
        q.options.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`).join("\n"),
        q.selectedOption,
        q.selectedOption === q.correctAnswer ? "Correct" : "Wrong",
        q.correctAnswer
      ]),
      startY: 140,
      styles: { fontSize: 8, cellWidth: 'wrap', overflow: 'linebreak' },
      columnStyles: { 1: { cellWidth: 60 }, 2: { cellWidth: 50 } },
      headStyles: { fillColor: [22, 160, 133] }
    });
    doc.save(`quiz_report_${user?.username || "user"}.pdf`);
  };

  const overallProgressData = [
    { name: "Correct", value: score },
    { name: "Incorrect", value: Math.max(totalQuestions - score, 0) }
  ];

  const timerPercent = (timeLeft / 30) * 100;
  const circleRadius = 30;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (timerPercent / 100) * circumference;

  return (
  <div className="quiz-container">
    <div className="quiz-header">
      <motion.h1 animate={{ scale: [0.9, 1] }}>MCQ Quiz</motion.h1>
      <span
        className="badge-icon"
        onClick={() => setShowBadgePopup(true)}
        style={{ cursor: "pointer", fontSize: "24px", marginLeft: "10px" }}
      >
        🏅
      </span>
    </div>

    <p className="difficulty"><strong>Current Difficulty:</strong> {difficulty}</p>
    <p className="score"><strong>Score:</strong> {score}/{totalQuestions}</p>

    <motion.select className="dropdown" value={selectedTopic} onChange={e => { setSelectedTopic(e.target.value); setSelectedSubtopic(""); }}>
      <option value="">Select Topic</option>
      {topics.map(t => <option key={t} value={t}>{t}</option>)}
    </motion.select>

    {selectedTopic && (
      <motion.select className="dropdown" value={selectedSubtopic} onChange={e => setSelectedSubtopic(e.target.value)}>
        <option value="">Select Subtopic</option>
        {subtopics.map(s => <option key={s} value={s}>{s}</option>)}
      </motion.select>
    )}

    {!quizActive ? (
      <motion.button className="start-btn" whileHover={{ scale: 1.1 }} disabled={!selectedTopic || !selectedSubtopic} onClick={startQuiz}>Start Quiz</motion.button>
    ) : (
      <motion.button className="stop-btn" whileHover={{ scale: 1.1 }} onClick={stopQuiz}>Stop Quiz</motion.button>
    )}

    {quizActive && (
      <div className="progress-info">
        <span>Question {currentQuestionNumber} of {totalQuizQuestions}</span>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${(currentQuestionNumber / totalQuizQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    )}

    {loading && <div className="loader"></div>}

    {currentQuestion && quizActive && !loading && (
      <motion.div className="question-container">
        <p>{currentQuestion.question}</p>

        {currentQuestion.code && (
          <pre className="code-block">
            <code>{currentQuestion.code}</code>
          </pre>
        )}

        <div className="timer-circle">
          <svg width="80" height="80">
            <circle cx="40" cy="40" r={circleRadius} stroke="#ddd" strokeWidth="4" fill="none" />
            <circle cx="40" cy="40" r={circleRadius} stroke="#0088FE" strokeWidth="4" fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 40 40)" />
            <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="16" fontWeight="bold">
              {timeLeft}s
            </text>
          </svg>
        </div>

        {currentQuestion.options.map((opt, i) => (
          <motion.button key={i} className="answer-btn" whileHover={{ scale: 1.1 }} onClick={() => handleAnswerClick(String.fromCharCode(65 + i))}>
            {String.fromCharCode(65 + i)}. {opt}
          </motion.button>
        ))}

        {!showHint && (
          <motion.button className="hint-btn" whileHover={{ scale: 1.1 }} onClick={() => setShowHint(true)}>
            💡 Show Hint
          </motion.button>
        )}
        {showHint && <p className="hint">Hint: {currentQuestion.hint}</p>}

        <motion.button
          className="report-btn"
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            clearInterval(timerRef.current);
            setShowReportModal(true);
          }}
        >
          🚩 Report Question
        </motion.button>
      </motion.div>
    )}

    {/* ✅ Report Modal */}
    {showReportModal && (
      <div className="report-modal">
        <div className="report-modal-content">
          <h3>🚩 Report Issue</h3>
          <textarea
            placeholder="Describe what's wrong..."
            value={reportReason}
            onChange={e => setReportReason(e.target.value)}
          />
          <button onClick={handleReportSubmit}>Submit & Get New Question</button>
          <button onClick={() => {
            setShowReportModal(false);
            timerRef.current = setInterval(() => {
              setTimeLeft(prev => {
                if (prev <= 1) {
                  clearInterval(timerRef.current);
                  handleTimeout();
                  return 0;
                }
                return prev - 1;
              });
            }, 1000);
          }}>Cancel</button>
        </div>
      </div>
    )}

    {/* ✅ Answer Modal */}
    {showAnswerModal && (
  <div className="answer-modal">
    <div className="answer-modal-content">
      <h3>{answerStatus.correct ? "✅ Correct!" : "❌ Incorrect"}</h3>
      <p>{answerStatus.explanation}</p>
      <button onClick={() => {
        setShowAnswerModal(false);
        if (currentQuestionNumber >= totalQuizQuestions) {
          stopQuiz();
        } else {
          setDifficulty(nextLevelAfterAnswer);
          setCurrentQuestionNumber(prev => prev + 1);
          fetchNewQuestion(nextLevelAfterAnswer);
        }
        isHandlingAnswerRef.current = false;
      }}>
        Next Question
      </button>
    </div>
  </div>
)}


    {showBadgePopup && (
      <div className="badge-popup">
        <div className="badge-popup-content">
          <h3>🏅 Your Earned Badges</h3>
          {earnedBadges.length === 0 ? (
            <p>No badges earned yet.</p>
          ) : (
            <ul>
              {earnedBadges.map((badge, i) => (
                <li key={i}>✅ {badge}</li>
              ))}
            </ul>
          )}
          <button onClick={() => setShowBadgePopup(false)}>Close</button>
        </div>
      </div>
    )}

    <h2>Overall Performance</h2>
    <div ref={pieChartRef} id="pie-chart-to-export">
      <PieChart width={300} height={300}>
        <Pie data={overallProgressData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
          <Label value={`Total: ${score}/${totalQuestions}`} position="center" fill="#000" />
          {overallProgressData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>

    <h2>Subtopic Performance</h2>
    {Object.entries(subtopicProgress).map(([sub, data], i) => {
      const incorrect = data.total - data.correct;
      const chartData = [{ name: "Correct", value: data.correct }, { name: "Incorrect", value: Math.max(incorrect, 0) }];
      return (
        <div key={i}>
          <h3>{sub}</h3>
          <PieChart width={300} height={300}>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
              <Label value={`Total: ${data.correct}/${data.total}`} position="center" fill="#000" />
              {chartData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      );
    })}

    {quizHistory.length > 0 && (
      <motion.button className="export-btn" whileHover={{ scale: 1.1 }} onClick={exportToPDF}>
        📄 Export Quiz Report as PDF
      </motion.button>
    )}

    {!quizActive && quizHistory.length > 0 && (
      <motion.button
        className="revise-btn"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          let weakest = null;
          let weakestAccuracy = 1;
          Object.entries(subtopicProgress).forEach(([sub, data]) => {
            const acc = data.total > 0 ? data.correct / data.total : 1;
            if (acc < weakestAccuracy) {
              weakestAccuracy = acc;
              weakest = sub;
            }
          });
          if (weakest) {
            const topic = Object.entries(staticSubtopics).find(([topic, subs]) =>
              subs.includes(weakest)
            );
            if (topic) {
              setSelectedTopic(topic[0]);
              setSelectedSubtopic(weakest);
              alert(`📌 Revising weak area: ${weakest} under ${topic[0]}`);
              startQuiz();
            } else {
              alert("Couldn't find matching topic for weak area.");
            }
          } else {
            alert("You have no weak areas yet. Great job!");
          }
        }}
      >
        🔄 Revise Weak Areas
      </motion.button>
    )}
  </div>
);
  

};

export default QuizApp;
