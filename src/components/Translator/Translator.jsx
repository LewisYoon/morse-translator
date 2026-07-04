import InputBar from "../InputBar/InputBar";
import OutputBar from "../OutputBar/OutputBar";
import classes from "./Translator.module.scss";
import { engToMorse } from "../../utils/translate";
import { useState } from "react";

export default function Translator() {
  const [input, setInput] = useState("");
  return (
    <section className={classes.wrapper}>
      <InputBar value={input} onChange={(e) => setInput(e.target.value)} />

      <OutputBar result={engToMorse(input)} />
    </section>
  );
}
