import { engToMorse, morseToEng, translate } from "../utils/translate.js";

describe("MVP Tests", () => {
  // English to morse MVP function
  describe("engToMorse()", () => {
    test("M-001 | single letter", () => {
      expect(engToMorse("A")).toBe(".-");
    });

    test("M-002 | multiple letters", () => {
      expect(engToMorse("AB")).toBe(".- -...");
    });

    test("M-003 | single word", () => {
      expect(engToMorse("hello")).toBe(".... . .-.. .-.. ---");
    });

    test("M-004 | multiple words", () => {
      expect(engToMorse("hello world")).toBe(
        ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
      );
    });

    test("M-005 | uppercase input", () => {
      expect(engToMorse("heLlO")).toBe(".... . .-.. .-.. ---");
    });
  });

  // Morse to English MVP function

  describe("morseToEng()", () => {
    test("M-006 | single letter", () => {
      expect(morseToEng(".-")).toBe("A");
    });

    test("M-007 | multiple letters", () => {
      expect(morseToEng(".- -...")).toBe("AB");
    });

    test("M-008 | single word", () => {
      expect(morseToEng(".... . .-.. .-.. ---")).toBe("HELLO");
    });

    test("M-009 | multiple words", () => {
      expect(morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
        "HELLO WORLD",
      );
    });

    test("M-010 | word separation", () => {
      expect(morseToEng(".... . / .-.. ---")).toBe("HE LO");
    });
  });

  //Auto detect function (Bonus MVP)

  describe("translate()", () => {
    test("M-011 | detects English input", () => {
      expect(translate("he")).toBe(".... .");
    });

    test("M-012 | detects Morse input", () => {
      expect(translate(".... .")).toBe("HE");
    });
  });
});
