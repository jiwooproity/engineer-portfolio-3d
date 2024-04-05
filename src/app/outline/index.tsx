import styles from "./outline.module.css";

const Outline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.logo}>Jiwoo.SO _</h1>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Outline;
