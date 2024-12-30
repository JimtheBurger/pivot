"use client";

import { useState } from "react";

type Puzzle = {
  scenario: string;
  hint: string;
  answer: string;
};

export default function DailyPuzzle() {
  const [puzzle] = useState<Puzzle>({
    scenario: "A man is found hanging in a locked room with no furniture, just a puddle of water beneath him. How did he die?",
    hint: "Consider the puddle.",
    answer: "He stood on a block of ice that melted.",
  });

  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState<string[]>([]);
  const [guessedAnswer, setGuessedAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    try {
      const response = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario: puzzle.scenario, question }),
      });

      const data = await response.json();
      if (data.answer) {
        setResponses((prev) => [...prev, `You: ${question}`, `AI: ${data.answer}`]);
      } else {
        setResponses((prev) => [...prev, `You: ${question}`, "AI: Sorry, I couldn't understand that."]);
      }
    } catch (error) {
      setResponses((prev) => [...prev, `You: ${question}`, "AI: An error occurred while processing your question."]);
      console.error("Error asking AI:", error);
    }

    setQuestion("");
  };

  const handleGuess = () => {
    if (guessedAnswer.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
      setResponses((prev) => [...prev, "Correct! You solved the puzzle!"]);
    } else {
      setResponses((prev) => [...prev, `Incorrect! The correct answer is: ${puzzle.answer}`]);
    }
    setGuessedAnswer("");
    setShowAnswer(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Lateral Thinking Puzzle</h1>

      <div className="max-w-xl w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <p className="text-lg mb-4">
          <strong>Scenario:</strong> {puzzle.scenario}
        </p>
        <p className="text-lg mb-4">
          <strong>Hint:</strong> {puzzle.hint}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Ask a Yes/No Question:</h2>
          <input
            className="w-full p-2 border rounded mb-4 text-black"
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleAskQuestion}
          >
            Ask
          </button>

          <div className="mt-4">
            {responses.map((response, index) => (
              <p key={index}>{response}</p>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Guess the Answer:</h2>
          <input
            className="w-full p-2 border rounded mb-4 text-black"
            type="text"
            placeholder="Your guess..."
            value={guessedAnswer}
            onChange={(e) => setGuessedAnswer(e.target.value)}
            />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handleGuess}
          >
            Guess
          </button>

          {showAnswer && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <strong>Answer:</strong> {puzzle.answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
