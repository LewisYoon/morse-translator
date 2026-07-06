import { engToMorse, morseToEng } from "../utils/translate.js";

describe("Edge Case Tests", () => {
  // Handle empty input

  describe("Empty input", () => {
    test("E-001 | engToMorse handles empty input", () => {
      expect(engToMorse("")).toBe("");
    });

    test("E-002 | morseToEng handles empty input", () => {
      expect(morseToEng("")).toBe("");
    });
  });

  // Handle invalid input

  describe("Invalid input", () => {
    test("E-003 | engToMorse ignores special characters", () => {
      expect(() => engToMorse("!@#$")).not.toThrow();
    });

    test("E-004 | morseToEng ignores invalid Morse code", () => {
      expect(() => morseToEng("...---...")).not.toThrow();
    });
  });

  // Handle whitespaces

  describe("Whitespace", () => {
    test("E-005 | engToMorse trims spaces at beginning and end", () => {
      expect(engToMorse(" hello ")).toBe(".... . .-.. .-.. ---");
    });

    test("E-006 | morseToEng trims spaces at beginning and end", () => {
      expect(morseToEng(" .... . .-.. .-.. --- ")).toBe("HELLO");
    });

    test("E-017 | engToMorse handles multiple spaces between words", () => {
      expect(engToMorse("hello   world")).toBe(
        ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
      );
    });

    test("E-008 | morseToEng handles multiple spaces between letters", () => {
      expect(morseToEng("....   .")).toBe("HE");
    });
  });

  // Handle mixed input

  describe("Mixed characters", () => {
    test("E-009 | engToMorse ignores special characters", () => {
      expect(engToMorse("!HELLO@")).toBe(".... . .-.. .-.. ---");
    });

    test("E-010 | morseToEng ignores special characters", () => {
      expect(morseToEng(".... . .-.. .-.. ---")).toBe("HELLO");
    });
  });

  // Handle number input (out of scope)

  describe("Number Input", () => {
    test("E-011 | engToMorse handle number input ", () => {
      expect(engToMorse("123")).toBe(".---- ..--- ...--");
    });
    test("E-012 | engToMorse handle number input ", () => {
      expect(morseToEng(".---- ..--- ...--")).toBe("123");
    });
  });
});
