import "@/shared/assets/css/applications.css";

import { useEffect } from "react";

const APP_LITS = [
  { icon: "github", name: "GitHub" },
  { icon: "terminal", name: "Terminal" },
];

const Applications = () => {
  useEffect(() => {
    const draggable = (el: HTMLDivElement) => {
      const dragStart = () => {
        el.classList.add("dragging");
      };

      const dragEnd = (e: DragEvent) => {
        el.classList.remove("dragging");
        const target = e.target as HTMLDivElement;
        const top = e.clientY > 60 ? e.clientY - 40 : 30;
        target.style.setProperty("top", `${top}px`);
        target.style.setProperty("left", `${e.clientX - 40}px`);
        target.style.setProperty("z-index", "9999");
      };

      el.addEventListener("dragstart", dragStart);
      el.addEventListener("dragend", dragEnd);

      return () => {
        el.removeEventListener("dragstart", dragStart);
        el.removeEventListener("dragend", dragEnd);
      };
    };

    const doubleClick = (el: HTMLDivElement) => {
      el.addEventListener("dblclick", (e) => console.log(e));
      return () => el.removeEventListener("dblclick", (e) => console.log(e));
    };

    const dragItems = document.querySelectorAll(
      ".application"
    ) as NodeListOf<HTMLDivElement>;
    dragItems.forEach(draggable);
    dragItems.forEach(doubleClick);
  }, []);

  return APP_LITS.map((app, i) => {
    const x = 20;
    const y = i * 121 + 50;
    const style = { top: y, left: x };

    return (
      <div
        key={app.name}
        className="application"
        style={style}
        draggable={true}
      >
        <div className={`application-icon ${app.icon}`} />
        <span className="application-name">{app.name}</span>
      </div>
    );
  });
};

export default Applications;
