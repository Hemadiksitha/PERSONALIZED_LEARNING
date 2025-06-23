const express = require("express");
const router = express.Router();
const runCode = require("../utils/codeRunner");

router.post("/", async (req, res) => {
  const { language, code, testCases, expectedOutputs, level, mode, customInput } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "Missing required fields: language and code." });
  }

  try {
    // ▶️ RUN MODE: just compile and run code with optional customInput
    if (mode === "run") {
      const rawResult = await runCode(language, code, [], [], req.body.customInput || "");
      return res.json({
        results: rawResult,
        score: 0,
        totalTestCases: 0,
        pointsPerTestCase: 0
      });
    }
    

    // 🧪 SUBMIT MODE: evaluate against test cases
    if (!testCases || !expectedOutputs || !level) {
      return res.status(400).json({ error: "Missing required fields for submit mode." });
    }

    const results = await runCode(language, code, testCases, expectedOutputs);

    const passedCount = results.filter(r => r.includes("Passed ✅")).length;
    let pointsPerTestCase = (level === "medium" || level === "hard") ? 20 : 10;
    const score = passedCount * pointsPerTestCase;

    return res.json({
      results,
      score,
      totalTestCases: testCases.length,
      pointsPerTestCase
    });

  } catch (err) {
    console.error("❌ Error executing code:", err);
    res.status(500).json({ error: "Execution failed: " + err.message });
  }
});

module.exports = router;