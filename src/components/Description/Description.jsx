import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.descr_wrap}>
      <h1 className={s.title}>Sip Happens Cafe</h1>
      <p>
        Please leave your feedback about our service by selecting of the options
        below
      </p>
    </div>
  );
};

export default Description;
