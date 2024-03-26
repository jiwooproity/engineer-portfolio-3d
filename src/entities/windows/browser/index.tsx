import styles from "./browser.module.css";

import { useWindows } from "@/shared/hooks";

const Navigation = () => {
  const { WINDOWS, closeApplication } = useWindows();

  const onClose = () => {
    closeApplication(WINDOWS.GITHUB);
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.btnsWrapper}>
        <button className={`${styles.navBtn} app-close`} onClick={onClose} />
        <button className={`${styles.navBtn} app-unfold`} />
        <button className={`${styles.navBtn} app-full`} />
      </div>
    </div>
  );
};

const Browser = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <iframe className={styles.iframe} src="https://github.com/jiwooproity" />
    </div>
  );
};

export default Browser;
