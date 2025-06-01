import s from "./Container.module.css";

const Container = ({ chidren }) => {
  return <div className={s.container}>{chidren}</div>;
};

export default Container;
