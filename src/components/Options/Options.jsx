import s from "./Options.module.css";

const Options = ({ updateFeedback, handleReset, total }) => {
  return (
    <div className={s.options_wrap}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {total > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
