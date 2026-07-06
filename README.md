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

| ID    | Category     | Test Case               | Input                                         | Expected Output                               | Status |
| ----- | ------------ | ----------------------- | --------------------------------------------- | --------------------------------------------- | ------ |
| M-001 | Eng to Morse | Single letter           | "A"                                           | ".-"                                          | Pass   |
| M-002 | Eng to Morse | Multiple letters        | "AB"                                          | ".- -..."                                     | Pass   |
| M-003 | Eng to Morse | Single word             | "hello"                                       | ".... . .-.. .-.. ---"                        | Pass   |
| M-004 | Eng to Morse | Multiple words          | "hello world"                                 | ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." | Pass   |
| M-005 | Eng to Morse | Uppercase handling      | "heLlO"                                       | ".... . .-.. .-.. ---"                        | Pass   |
| M-006 | Morse to Eng | Single letter           | ".-"                                          | "A"                                           | Pass   |
| M-007 | Morse to Eng | Multiple letters        | ".- -..."                                     | "AB"                                          | Pass   |
| M-008 | Morse to Eng | Single word             | ".... . .-.. .-.. ---"                        | "HELLO"                                       | Pass   |
| M-009 | Morse to Eng | Multiple words          | ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." | "HELLO WORLD"                                 | Pass   |
| M-010 | Morse to Eng | Word separation         | ".... . / .-.. ---"                           | "HE LO"                                       | Pass   |
| M-011 | Auto Detect  | English input detection | "he"                                          | ".... ."                                      | Pass   |
| M-012 | Auto Detect  | Morse input detection   | ".... ."                                      | "HE"                                          | Pass   |

## Edgecase Test Result

| ID    | Category      | Test Case                             | Input                  | Expected Output                             | Status             |
| ----- | ------------- | ------------------------------------- | ---------------------- | ------------------------------------------- | ------------------ |
| E-001 | Empty input   | engToMorse handles empty input        | ""                     | ""                                          | Pass               |
| E-002 | Empty input   | morseToEng handles empty input        | ""                     | ""                                          | Pass               |
| E-003 | Invalid input | engToMorse ignores special characters | !@#$                   | ""                                          | Pass               |
| E-004 | Invalid input | morseToEng ignores invalid Morse code | ...---...              | ""                                          | Pass               |
| E-005 | Whitespace    | trim leading/trailing spaces (eng)    | hello                  | .... . .-.. .-.. ---                        | Pass               |
| E-006 | Whitespace    | trim leading/trailing spaces (morse)  | .... . .-.. .-.. ---   | HELLO                                       | Pass               |
| E-007 | Whitespace    | multiple spaces between words (eng)   | hello world            | .... . .-.. .-.. --- / .-- --- .-. .-.. -.. | **Fail**           |
| E-008 | Whitespace    | multiple separators in Morse          | .... / / / .           | HE                                          | Pass               |
| E-009 | Mixed input   | ignore special characters (eng)       | !HELLO@                | .... . .-.. .-.. ---                        | **Fail**           |
| E-010 | Mixed input   | clean Morse decode                    | !.... . .-.. .-.. ---@ | HELLO                                       | Fail               |
| E-011 | Numbers       | engToMorse number conversion          | 123                    | .---- ..--- ...--                           | Fail(out of scope) |
| E-012 | Numbers       | morseToEng number conversion          | .---- ..--- ...--      | 123                                         | Fail(out of scope) |
