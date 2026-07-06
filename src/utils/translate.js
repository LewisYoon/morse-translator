import { morseCode, reverseMorseCode } from "../data/morse.js";

export const engToMorse = (text) => {
  return text

    .toUpperCase()
    .split(" ") //splits by words
    .map(
      (word) =>
        word
          .split("") //splits by characters
          .map((char) => morseCode[char])
          .join(" "), //joins characters with space
    )
    .join(" / "); // joins words with " / "
};

export const morseToEng = (morse) => {
  return morse
    .split(" / ")
    .map((word) =>
      word
        .split(" ")
        .map((char) => reverseMorseCode[char])
        .join(""),
    )
    .join(" ");
};

export const translate = (text) => {
  if (text.includes(".") || text.includes("-")) {
    return morseToEng(text);
  }
  return engToMorse(text);
};
