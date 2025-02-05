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
