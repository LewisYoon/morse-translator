# Morse Translator (React)

A simple React application that translates between English text and Morse code.

---

## Features

### MVP

- Translate English text to Morse code
- Translate Morse code to English
- Correctly separates Morse characters with spaces
- Uses `/` to separate words in Morse code
- Non-DOM logic is unit tested with Jest

### Bonus

- Automatically detects whether input is English or Morse code
- Translates to the opposite format without requiring mode selection

---

## Tech Stack

- React
- JavaScript (ES6)
- SCSS Modules
- Jest

---

## Testing Strategy

The project includes Jest unit tests for all non-DOM translation logic.

### Test Structure

- **MVP Tests**
  - Core translation logic
  - Basic word/character conversion

- **Edge Case Tests**
  - Invalid characters
  - Empty input
  - Mixed or unusual input formats

---

## How to Run Tests

```bash
npm install
npm test
```
