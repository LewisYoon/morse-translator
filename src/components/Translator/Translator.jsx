import InputBar from "../InputBar/InputBar";
import OutputBar from "../OutputBar/OutputBar";
import classes from "./Translator.module.scss";

export default function Translator() {
  return (
    <section className={classes.wrapper}>
      <InputBar />
      <OutputBar />
    </section>
  );
}
