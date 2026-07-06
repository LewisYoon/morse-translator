import { engToMorse, morseToEng, translate } from "../utils/translate.js";

describe("MVP - english to morse && morse to english", () => {
  // Eng to Morse

  test("engToMorse - single letter", () => {
    expect(engToMorse("A")).toBe(".-");
  });

  test("engToMorse - Multiple letter", () => {
    expect(engToMorse("AB")).toBe(".- -...");
  });

  test("engToMorse - multiple words", () => {
    expect(engToMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    );
  });

  test("engToMorse - single word", () => {
    expect(engToMorse("hello")).toBe(".... . .-.. .-.. ---");
  });

  test("engToMorse - multiple words", () => {
    expect(engToMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    );
  });

  test("engToMorse - to uppercase", () => {
    expect(engToMorse("heLlO")).toBe(".... . .-.. .-.. ---");
  });

  // Morse to Eng
  test("morseToEng - single morse code (letter)", () => {
    expect(morseToEng(".-")).toBe("A");
  });

  test("morseToEng - multiple morse code (letter)", () => {
    expect(morseToEng(".- -...")).toBe("AB");
  });

  test("morseToEng - single morse code (word)", () => {
    expect(morseToEng(".... . .-.. .-.. ---")).toBe("HELLO");
  });

  test("morseToEng - multiple morse code (words)", () => {
    expect(morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
      "HELLO WORLD",
    );
  });

  test("morseToEng - check word separation using / ", () => {
    expect(morseToEng(".... . / .-.. ---")).toBe("HE LO");
  });

  // Bonus MVP (auto detect input)

  test("translate - detects English input", () => {
    expect(translate("he")).toBe(".... .");
  });

  test("translate - detects Morse input", () => {
    expect(translate(".... .")).toBe("HE");
  });
});
