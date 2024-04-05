import styles from "./style/navigation.module.css";

import { RealTime } from "@/shared/components";
import { useCheckOS } from "@/shared/hooks";

const Navigation = () => {
  const OS = useCheckOS();

  return (
    <div className={styles.container}>
      <div className={styles.leftArea}>
        <img className={styles.logo} src="../svgs/apple-logo.svg" />
        <span className={`${styles.title} ${OS === "mac" ? styles.mac : ""}`}>Finder</span>
        <span className={`${styles.item} ${OS === "mac" ? styles.mac : ""}`}>File</span>
      </div>
      <div className={styles.rightArea}>
        <RealTime />
      </div>
    </div>
  );
};

export default Navigation;
