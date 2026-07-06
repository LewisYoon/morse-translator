import { morseCode, reverseMorseCode } from "../data/morse.js";

export const engToMorse = (text) => {
  return text
    .trim() //trims spaces at begining and end, fix(E-005)
    .toUpperCase()
    .split(" ") //splits by words
    .filter(Boolean) //removes empty strings by filtering falsy value, fix(E-007)
    .map(
      (word) =>
        word
          .split("") //splits by characters
          .map((char) => morseCode[char])
          .filter(Boolean) // removes unsupported characters, fix(E-009)

          .join(" "), //joins characters with space
    )
    .join(" / "); // joins words with " / "
};

export const morseToEng = (morse) => {
  return morse
    .trim()
    .split(" / ")

    .map((word) =>
      word
        .split(" ")
        .filter(Boolean)
        .map((char) => reverseMorseCode[char])
        .filter(Boolean) // fix E-010: remove invalid Morse symbols

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
