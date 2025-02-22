# Wordle Clone

A simple Wordle-like game built with **React**. This project is a clone of the popular word-guessing game, Wordle, where players have 6 attempts to guess a 5-letter word. After each guess, the game provides color-coded feedback to help the player refine their next guess.

---

## Features

### Core Features
1. **Game Logic**:
   - The user has 6 attempts to guess a 5-letter word.
   - After each guess, the game provides feedback:
     - **Green**: Correct letter in the correct position.
     - **Yellow**: Correct letter in the wrong position.
     - **Gray**: Incorrect letter.
   - Prevents invalid words from being submitted.

2. **UI/UX**:
   - A grid displays previous guesses with color-coded feedback.
   - A message is shown when the user wins or loses.
   - A "New Game" button allows the user to restart the game.

3. **State Management**:
   - Maintains guessed words, remaining attempts, and game status using React state.

4. **Performance & Code Quality**:
   - Clean, modular, and readable code.
   - Proper component structure.
  
5. **Deployment**:
   The application is deployed on Netlify and can be accessed[here](https://my-wordleclone.netlify.app/)

### Bonus Features (Optional)
- Animations for letter feedback.
- Dark mode toggle.

---

## Tech Stack

- **React**: Frontend library for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **JavaScript**: Core programming language for game logic.
- **HTML**: Markup for structuring the game.

---

## How to Run the Project

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/wordle-clone.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd wordle-clone
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Open the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
wordle-clone/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   ├── index.css            # Global styles
│   └── ...                  # Other components and utilities
├── README.md                # Project documentation
├── package.json             # Project dependencies and scripts
└── tailwind.config.js       # TailwindCSS configuration
```


---

## Word List

This game uses a predefined set of words:

```javascript
const WORDS = ["APPLE", "CRANE", "TIGER", "OCEAN", "MONEY"]; // Hardcoded word list
```

These words are randomly selected as the target word for each game session.

---


## How to Play

1. **Start the Game**:
   - The game randomly selects a 5-letter word from a predefined list.

2. **Make a Guess**:
   - Enter a 5-letter word in the input field and click "Submit".

3. **Feedback**:
   - After each guess, the letters will be color-coded:
     - **Green**: Correct letter in the correct position.
     - **Yellow**: Correct letter in the wrong position.
     - **Gray**: Incorrect letter.

4. **Win or Lose**:
   - If you guess the word correctly within 6 attempts, you win!
   - If you exhaust all 6 attempts, the game ends, and the correct word is revealed.

5. **Restart**:
   - Click the "New Game" button to start a new game.


## Future Improvements

- Add animations for letter feedback.
- Implement a dark mode toggle.
- Integrate a backend to fetch words dynamically.
- Add a leaderboard to track high scores.

---

## Deployment:

The application is deployed on Netlify and can be accessed[here](https://my-wordleclone.netlify.app/)

---

## Author

[Umer Faruque Syed](https://github.com/umar710)  
*Full Stack Developer*

---
```
