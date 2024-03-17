import "@/shared/assets/css/windows/app-layout.css";

import { CSSProperties, MouseEvent, ReactNode, useEffect } from "react";

interface WindowLayoutPropsIF {
  name: string;
  width: number;
  height: number;
  divide: string;
  style: CSSProperties;
  children: ReactNode;
}

const WindowLayout = (props: WindowLayoutPropsIF) => {
  const { name, divide, width, height, style, children } = props;
  const winwoTarget = `${name}${divide}`;

  const getElementAttr = (className: string) => {
    const target = document.querySelector(className);
    return target as HTMLDivElement;
  };

  const getElementAttrAll = (className: string) => {
    const targets = document.querySelectorAll(className);
    return targets as NodeListOf<HTMLDivElement>;
  };

  const changeFocus = () => {
    const focusing = (app: HTMLDivElement) => {
      const isFocusApp = app.className.includes(`${winwoTarget}-application`);
      app.style.setProperty("z-index", `${isFocusApp ? "9998" : "1"}`);
    };

    const getApps = getElementAttrAll(".app-container");
    getApps.forEach(focusing);
  };

  const onDragStart = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const shiftX = e.clientX - target.getBoundingClientRect().left;
    const shiftY = e.clientY - target.getBoundingClientRect().top;

    const onMoveAt = (x: number, y: number) => {
      const limitY = y - shiftY <= 40 ? 40 : y - shiftY;

      target.style.left = x - shiftX + "px";
      target.style.top = limitY + "px";
      target.style.transform = "none";

      if (limitY === 40) onMouseUp();
    };

    const onMouseMove = (e: globalThis.MouseEvent) => {
      onMoveAt(e.pageX, e.pageY);
    };

    const onMouseUp = () => {
      container.removeEventListener("mousemove", onMouseMove);
      target.onmouseup = null;
    };

    const container = getElementAttr(".screen-container");
    container.addEventListener("mousemove", onMouseMove);
    target.onmouseup = onMouseUp;

    changeFocus();
  };

  useEffect(() => {
    // 각각 생성된 Application 동작을 위해 {name}-application 으로 구분하여 이벤트를 부여함.
    const app = getElementAttr(`.${winwoTarget}-application`) as HTMLDivElement;
    app.ondragstart = () => false;
  }, []);

  return (
    <div
      className={`app-container ${winwoTarget}-application`}
      style={{ ...style, width, height }}
      draggable={true}
      onDragStart={onDragStart}
      onClick={changeFocus}
    >
      {children}
    </div>
  );
};

export default WindowLayout;
