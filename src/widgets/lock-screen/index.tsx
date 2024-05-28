import useUnLock from "./lib/use-unlock";
import styles from "./style/lock-screen.module.css";

import { useCheckOS, useDay } from "@/shared/hooks";

const LockScreen = () => {
  const OS = useCheckOS();
  const { month, day, week, time } = useDay();
  const [open, unlockScreen] = useUnLock();

  return (
    <div className={`${styles.container} ${open ? styles.open : ""}`}>
      <span className={styles.date}>{`${week}, ${day} ${month}`}</span>
      <span className={styles.time}>{time}</span>
      <div className={`${styles.accessBox} ${OS === "mac" ? styles.mac : ""}`}>
        <img src={"../images/screen/my-profile.png"} className={styles.profile} />
        <span className={styles.name}>소지우</span>
        <button onClick={unlockScreen}>
          <span>OPEN</span>
        </button>
      </div>
    </div>
  );
};

export default LockScreen;
