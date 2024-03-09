import "@/shared/assets/css/applications.css";

import { DragEvent, MouseEvent } from "react";

const APP_LITS = [
  { icon: "app-notion", name: "Notion" },
  { icon: "app-github", name: "GitHub" },
  { icon: "app-terminal", name: "Terminal" },
];

const Applications = () => {
  const onDragStart = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;
    target.classList.add("dragging");
  };

  const onDragEnd = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;
    target.classList.remove("dragging");
    const top = e.clientY > 60 ? e.clientY - 40 : 30;
    target.style.setProperty("top", `${top}px`);
    target.style.setProperty("left", `${e.clientX - 40}px`);
    target.style.setProperty("z-index", "9999");
  };

  const onDoubleClick = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    const value = current.dataset["value"];

    const anchor = document.createElement("a");
    anchor.setAttribute("target", "_blank");

    switch (value) {
      case "app-github":
        anchor.setAttribute("href", "https://github.com/jiwooproity");
        anchor.click();
        break;
      case "app-notion":
        anchor.setAttribute(
          "href",
          "https://www.notion.so/Resume-1579598f11a14aa5bfc83c3606914732"
        );
        anchor.click();
        break;
      default:
        break;
    }
  };

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
        data-value={app.icon}
        onDoubleClick={onDoubleClick}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className={`application-icon ${app.icon}`} />
        <span className="application-name">{app.name}</span>
      </div>
    );
  });
};

export default Applications;
