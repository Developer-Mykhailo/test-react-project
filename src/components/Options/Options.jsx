import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({ updateFeedback, handleReset, total }) => {
  return (
    <div className={s.options_wrap}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      <button
        className={clsx(s.reset, { [s.show]: total > 0 })}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
