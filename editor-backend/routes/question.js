// backend/routes/question.js

const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// POST: Get a random question based on topic and difficulty level
router.post("/", async (req, res) => {
  const { topic, level } = req.body;

  // 🔍 Validate request
  if (!topic || !level) {
    return res.status(400).json({ error: "Topic and level are required." });
  }

  try {
    // 🗂 Fetch all matching questions
    const questions = await Question.find({ topic, level });

    if (!questions.length) {
      return res.status(404).json({ error: "No questions found for this topic and level." });
    }

    // 🎯 Pick a random question
    const q = questions[Math.floor(Math.random() * questions.length)];

    // 📤 Send full structured question
    res.json({
      title: q.title || "Untitled",
      question: q.question || "",
      sampleInputs: q.sampleInputs || [],
      sampleOutputs: q.sampleOutputs || [],
      explanations: q.explanations || [],
      testCases: q.testCases || [],
      expectedOutputs: q.expectedOutputs || [],
      constraints: q.constraints || "N/A",
      expectedTimeComplexity: q.expectedTimeComplexity || "N/A",
      expectedSpaceComplexity: q.expectedSpaceComplexity || "N/A"
    });
  } catch (err) {
    console.error("❌ Error fetching question:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
