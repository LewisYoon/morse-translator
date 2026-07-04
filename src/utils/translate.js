import { morseCode } from "../data/morse.js";

// export const engToMorse = (text) => {
//   return text

//     .toUpperCase()
//     .split(" ") //splits by words
//     .map((word) =>
//       word
//         .split("") //splits by characters
//         .map((char) => morseCode[char])
//         .join(" "), //joins characters with space
//     )
//     .join(" / "); // joins words with " / "
// };

export const engToMorse = (text) => {
  const upper = text.toUpperCase();
  console.log("toUpperCase:", upper);

  const words = upper.split(" ");
  console.log("split words:", words);

  const morseWords = words.map((word) => {
    const chars = word.split("");
    console.log("chars:", chars);

    const morseChars = chars.map((char) => morseCode[char]);
    console.log("morse chars:", morseChars);

    const joinedChars = morseChars.join(" ");
    console.log("joined chars:", joinedChars);

    return joinedChars;
  });

  console.log("morse words:", morseWords);

  const result = morseWords.join(" / ");
  console.log("result:", result);

  return result;
};

engToMorse("Hello World!  !");
