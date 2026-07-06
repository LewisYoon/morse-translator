# Morse Translator (React + vite)

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
- Vite
- JavaScript
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

## test result

## MVP Test Result

## 🧪 MVP Test Coverage

| ID    | Category     | Test Case               | Input                                         | Expected Output                               | Status |
| ----- | ------------ | ----------------------- | --------------------------------------------- | --------------------------------------------- | ------ |
| M-001 | Eng to Morse | Single letter           | "A"                                           | ".-"                                          | ✅     |
| M-002 | Eng to Morse | Multiple letters        | "AB"                                          | ".- -..."                                     | ✅     |
| M-003 | Eng to Morse | Single word             | "hello"                                       | ".... . .-.. .-.. ---"                        | ✅     |
| M-004 | Eng to Morse | Multiple words          | "hello world"                                 | ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." | ✅     |
| M-005 | Eng to Morse | Uppercase handling      | "heLlO"                                       | ".... . .-.. .-.. ---"                        | ✅     |
| M-006 | Morse to Eng | Single letter           | ".-"                                          | "A"                                           | ✅     |
| M-007 | Morse to Eng | Multiple letters        | ".- -..."                                     | "AB"                                          | ✅     |
| M-008 | Morse to Eng | Single word             | ".... . .-.. .-.. ---"                        | "HELLO"                                       | ✅     |
| M-009 | Morse to Eng | Multiple words          | ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." | "HELLO WORLD"                                 | ✅     |
| M-010 | Morse to Eng | Word separation         | ".... . / .-.. ---"                           | "HE LO"                                       | ✅     |
| M-011 | Auto Detect  | English input detection | "he"                                          | ".... ."                                      | ✅     |
| M-012 | Auto Detect  | Morse input detection   | ".... ."                                      | "HE"                                          | ✅     |

## Edgecase Test Result
