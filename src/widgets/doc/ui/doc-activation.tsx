import styles from "../style/doc.module.css";

const DocActivation = (props: { active: boolean }) => {
  const { active } = props;
  return <div className={active ? styles.active : ""} />;
};

export default DocActivation;
