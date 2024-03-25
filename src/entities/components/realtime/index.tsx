import styles from "./realtime.module.css";

import { useCheckOS, useDay } from "@/shared/hooks";

const RealTime = () => {
  const OS = useCheckOS();
  const { month, day, week, time, meridiem } = useDay();

  return (
    <div className={`${styles.box} ${OS === "mac" ? styles.mac : ""}`}>
      <span className={styles.date}>{week}</span>
      <span className={styles.date}>{day}</span>
      <span className={styles.date}>{month}</span>
      <span className={styles.time}>{`${time} ${meridiem}`}</span>
    </div>
  );
};

export default RealTime;
