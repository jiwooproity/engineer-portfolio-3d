import styles from "./style/applications.module.css";

import { DragEvent, useEffect } from "react";
import { useApplication } from "@/shared/hooks";

const Applications = () => {
  const options = useApplication();
  const { APP_LITS, selected } = options;
  const { initSelected, focusSelected, showApp } = options;

  const onDragStart = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;
    target.classList.add("dragging");
  };

  const onDragEnd = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;
    target.classList.remove("dragging");
    const top = e.clientY > 60 ? e.clientY - 40 : 40;
    target.style.setProperty("top", `${top}px`);
    target.style.setProperty("left", `${e.clientX - 40}px`);
  };

  useEffect(() => {
    const container = document.querySelector(".screen-container") as HTMLDivElement;

    container.addEventListener("click", initSelected);
    return () => container.removeEventListener("click", initSelected);
  }, [initSelected]);

  return APP_LITS.map((app, i) => {
    const x = 20;
    const y = i * 141 + 60;
    const style = { top: y, left: x };
    const select = selected === app.name ? styles.selected : "";

    return (
      <div
        key={app.name}
        className={`${styles.application} ${select}`}
        style={style}
        draggable={true}
        data-value={app.icon}
        data-divide={app.name}
        onDoubleClick={showApp}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onClick={() => focusSelected(app.name)}
      >
        <div className={`application-icon ${app.icon}`} />
        <span className={styles.name}>{app.name}</span>
      </div>
    );
  });
};

export default Applications;
