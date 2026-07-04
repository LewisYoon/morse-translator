import classes from "./OutputBar.module.scss";

export default function OutputBar({ result }) {
  return <div className={classes.outputBar}>Morse Code: {result}</div>;
}
