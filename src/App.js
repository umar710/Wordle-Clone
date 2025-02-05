import React, { useState } from "react";

const WORDS = ["APPLE", "CRANE", "TIGER", "OCEAN", "MONEY"]; // Hardcoded word list

function App() {
  const [targetWord] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  ); // Randomly select a word
  const [guesses, setGuesses] = useState(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== 5 || !WORDS.includes(currentGuess)) {
      alert("Please enter a valid 5-letter word.");
      return;
    }

    const newGuesses = [...guesses];
    newGuesses[attempts] = currentGuess;
    setGuesses(newGuesses);

    if (currentGuess === targetWord) {
      setGameOver(true);
      alert("Congratulations! You guessed the word!");
    } else if (attempts >= 5) {
      setGameOver(true);
      alert(`Game over! The word was ${targetWord}.`);
    }

    setAttempts(attempts + 1);
    setCurrentGuess("");
  };

  const getFeedback = (guess) => {
    return guess.split("").map((letter, index) => {
      if (letter === targetWord[index]) {
        return "green";
      } else if (targetWord.includes(letter)) {
        return "yellow";
      } else {
        return "gray";
      }
    });
  };

  const restartGame = () => {
    setGuesses(Array(6).fill(""));
    setCurrentGuess("");
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Wordle Clone</h1>
      <div className="grid grid-rows-6 gap-2">
        {guesses.map((guess, row) => (
          <div key={row} className="grid grid-cols-5 gap-2">
            {Array(5)
              .fill("")
              .map((_, col) => {
                const feedback = guess ? getFeedback(guess)[col] : "";
                return (
                  <div
                    key={col}
                    className={`w-12 h-12 flex items-center justify-center border-2 font-bold text-lg ${
                      feedback === "green"
                        ? "bg-green-500"
                        : feedback === "yellow"
                        ? "bg-yellow-500"
                        : feedback === "gray"
                        ? "bg-gray-500"
                        : "bg-white"
                    }`}
                  >
                    {guess[col] || ""}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
      {!gameOver && (
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            value={currentGuess}
            onChange={handleInputChange}
            maxLength={5}
            className="p-2 border-2 border-gray-300 rounded"
            placeholder="Enter a 5-letter word"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      )}
      {gameOver && (
        <button
          onClick={restartGame}
          className="mt-6 p-2 bg-green-500 text-white rounded"
        >
          New Game
        </button>
      )}
    </div>
  );
}

export default App;
