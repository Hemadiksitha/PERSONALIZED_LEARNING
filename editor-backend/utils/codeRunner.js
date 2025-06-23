const fs = require("fs");
const { exec } = require("child_process");

function runCommand(command, input) {
  return new Promise((resolve) => {
    const process = exec(command, (error, stdout, stderr) => {
      if (error || stderr) return resolve(stderr || error.message);
      resolve(stdout.trim());
    });

    if (process.stdin) {
      process.stdin.write(input || "");
      process.stdin.end();
    }
  });
}

async function runCode(language, code, testCases = [], expectedOutputs = [], customInput = null) {
  const fileNames = {
    python: "temp_code.py",
    c: "temp_code.c",
    java: "Main.java"
  };

  const fileName = fileNames[language];
  fs.writeFileSync(fileName, code); // Save user code

  const results = [];

  // Choose appropriate command
  let command;
  if (language === "python") {
    command = `python ${fileName}`;
  } else if (language === "c") {
    if (fs.existsSync("temp.exe")) fs.unlinkSync("temp.exe");
    command = `gcc ${fileName} -o temp.exe && temp.exe`;
  } else if (language === "java") {
    command = `javac Main.java && java Main`;
  }

  // === Custom Input Run Mode ===
  if (customInput !== null) {
    const output = await runCommand(command, customInput);
    results.push(output);
  }

  // === Submit Mode (Test case validation) ===
  else {
    for (let i = 0; i < testCases.length; i++) {
      const output = await runCommand(command, testCases[i]);
      if (output === expectedOutputs[i]) {
        results.push(`Test Case ${i + 1}: Passed ✅`);
      } else {
        results.push(`Test Case ${i + 1}: Failed ❌ (Expected: "${expectedOutputs[i]}", Got: "${output}")`);
      }
    }
  }

  // Cleanup
  try {
    if (fs.existsSync(fileName)) fs.unlinkSync(fileName);
    if (fs.existsSync("temp.exe")) fs.unlinkSync("temp.exe");
    if (fs.existsSync("Main.class")) fs.unlinkSync("Main.class");
  } catch (e) {
    console.error("Cleanup error:", e.message);
  }

  return results;
}

module.exports = runCode;
