import styles from "./dock.module.css";

import { useApplication } from "@/shared/hooks";

const Dock = () => {
  const options = useApplication();
  const { APP_LITS, showApp } = options;

  return (
    <>
      <div className={styles.identy} />
      <div className={styles.container}>
        {APP_LITS.map((app) => (
          <div
            key={app.name}
            style={{ display: app.icon === "app-folder" ? "none" : "" }}
            className={styles.application}
            data-value={app.icon}
            data-divide={app.name}
            onDoubleClick={showApp}
          >
            <div className={styles.tooltip}>
              <span className={styles.label}>{app.name}</span>
            </div>
            <div className={`application-icon ${app.icon}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dock;
