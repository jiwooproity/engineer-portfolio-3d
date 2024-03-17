import "@/shared/assets/css/screen/applications.css";

import { DragEvent, MouseEvent, useEffect, useState } from "react";
import { useWindows } from "@/shared/hooks";

const APP_LITS = [
  { icon: "app-notion", name: "Notion" },
  { icon: "app-github", name: "GitHub" },
  { icon: "app-terminal", name: "Terminal" },
  { icon: "app-memo", name: "Memo" },
  { icon: "app-folder", name: "Repository" },
  { icon: "app-folder", name: "Profile" },
];

const Applications = () => {
  const { WINDOWS, openApplication } = useWindows();
  const [selected, setSelected] = useState("");

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

  const onDoubleClick = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    const value = current.dataset["value"] as string;
    const divide = current.dataset["divide"] as string;

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
      case "app-memo":
        openApplication(WINDOWS.MEMO);
        break;
      case "app-terminal":
        openApplication(WINDOWS.TERMINAL);
        break;
      case "app-folder":
        openApplication(WINDOWS.FOLDER, divide);
        break;
      default:
        break;
    }

    setSelected(value);
  };

  const initSelected = (e: globalThis.MouseEvent) => {
    const target = e.target;
    const current = e.currentTarget;
    if (target === current) setSelected("");
  };

  const focusSelected = (icon: string) => setSelected(icon);

  useEffect(() => {
    const container = document.querySelector(
      ".screen-container"
    ) as HTMLDivElement;

    container.addEventListener("click", initSelected);
    return () => container.removeEventListener("click", initSelected);
  }, []);

  return APP_LITS.map((app, i) => {
    const x = 20;
    const y = i * 141 + 60;
    const style = { top: y, left: x };
    const select = selected === app.name ? "selected" : "";

    return (
      <div
        key={app.name}
        className={`application ${select}`}
        style={style}
        draggable={true}
        data-value={app.icon}
        data-divide={app.name}
        onDoubleClick={onDoubleClick}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onClick={() => focusSelected(app.name)}
      >
        <div className={`application-icon ${app.icon}`} />
        <span className="application-name">{app.name}</span>
      </div>
    );
  });
};

export default Applications;
