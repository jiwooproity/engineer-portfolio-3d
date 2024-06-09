import styles from "./style/navigation.module.css";

import { useCheckOS } from "@/shared/hooks";

import RightArea from "./ui/right-area";
import Logo from "./ui/logo";

const Navigation = () => {
  const OS = useCheckOS();

  return (
    <div className={styles.container}>
      <ul className={styles.leftArea}>
        <li>
          <Logo />
        </li>
        <li>
          <span className={`${styles.title} ${OS === "mac" ? styles.mac : ""}`}>Finder</span>
        </li>
        <li>
          <span className={`${styles.item} ${OS === "mac" ? styles.mac : ""}`}>File</span>
        </li>
      </ul>
      <RightArea />
    </div>
  );
};

export default Navigation;
