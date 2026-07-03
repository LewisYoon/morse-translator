import classes from "./InputBar.module.scss";

export default function OutputBar() {
  return (
    <input
      className={classes.inputBar}
      placeholder="Type English..."
      type="text"
    />
  );
}
