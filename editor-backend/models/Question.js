const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  topic: String,
  level: String,
  title: String,
  question: String,
  sampleInputs: [String],
  sampleOutputs: [String],
  explanations: [String],
  testCases: [String],
  expectedOutputs: [String],
  constraints: String,
  expectedTimeComplexity: String,
  expectedSpaceComplexity: String
});

module.exports = mongoose.model("Question", questionSchema);
