import styles from "./dock.module.css";

import { MouseEvent, useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import { windowKeyHistory } from "@/shared/store/atoms";
import { useApplication } from "@/shared/hooks";

import socket from "@/shared/fetch/instance/socket";

const Activation = (props: { active: boolean }) => {
  const { active } = props;
  return <div className={active ? styles.active : ""} />;
};

const Dock = () => {
  const history = useRecoilValue(windowKeyHistory);
  const { APP_LITS, showApp } = useApplication();
  const [memoAlert, setMemoAlert] = useState(false);

  const removeAlert = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    const value = current.dataset["divide"] as string;
    showApp(e);

    if (value !== "Memo") return;
    setMemoAlert(false);
  };

  useEffect(() => {
    socket.on("alert", () => {
      setMemoAlert(!history["memo"]);
    });
  }, []);

  useEffect(() => {
    if (history["memo"]) setMemoAlert(false);
  }, [history["memo"]]);

  return (
    <>
      <div className={styles.identy} />
      <div className={styles.container}>
        {APP_LITS.map((app, i) => {
          // 앱 스타일 및 알림 지정
          let className = styles.application;
          className += ` ${
            app.name === "Memo" && memoAlert ? styles.alert : ""
          }`;

          // 앱 위치
          const left = i * 110 + 20;
          const remove = app.icon === "app-folder" ? "none" : "";

          return (
            <div
              key={app.name}
              style={{ display: remove, left: left }}
              className={className}
              data-value={app.icon}
              data-divide={app.name}
              onDoubleClick={removeAlert}
            >
              <div className={styles.tooltip}>
                <span className={styles.label}>{app.name}</span>
              </div>
              <div className={`application-icon ${app.icon}`} />
              <Activation active={history[app.name.toLowerCase()]} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dock;
