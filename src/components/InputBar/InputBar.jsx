import classes from "./InputBar.module.scss";

export default function OutputBar({ value, onChange }) {
  console.log(value);

  return (
    <input
      className={classes.inputBar}
      value={value}
      onChange={onChange}
      placeholder="Type English or Morse code..."
      type="text"
    />
  );
}
