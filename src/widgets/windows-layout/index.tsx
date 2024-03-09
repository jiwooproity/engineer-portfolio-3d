import "@/shared/assets/css/windows/app-layout.css";

import { MouseEvent, ReactNode, useEffect } from "react";

interface WindowLayoutPropsIF {
  width: number;
  height: number;
  children: ReactNode;
}

const WindowLayout = (props: WindowLayoutPropsIF) => {
  const { width, height, children } = props;

  const onDragStart = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    let shiftX = e.clientX - target.getBoundingClientRect().left;
    let shiftY = e.clientY - target.getBoundingClientRect().top;

    const moveAt = (x: number, y: number) => {
      target.style.left = x - shiftX + "px";
      target.style.top = y - shiftY + "px";
    };

    const onMouseMove = (e: globalThis.MouseEvent) => {
      moveAt(e.pageX, e.pageY);
    };

    target.onmouseup = function () {
      container.removeEventListener("mousemove", onMouseMove);
      target.onmouseup = null;
    };

    const container = document.querySelector(
      ".screen-container"
    ) as HTMLDivElement;

    container.addEventListener("mousemove", onMouseMove);
  };

  useEffect(() => {
    const app = document.querySelector(".app-container") as HTMLDivElement;
    app.ondragstart = function () {
      return false;
    };
  }, []);

  return (
    <div
      className="app-container"
      style={{ width, height }}
      draggable={true}
      onDragStart={onDragStart}
    >
      {children}
    </div>
  );
};

export default WindowLayout;
