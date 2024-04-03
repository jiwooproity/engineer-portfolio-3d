import { DragEvent, useEffect } from "react";

interface UseDragHooksProps {
  name: string;
  divide: string;
}

const useDrag = ({ name, divide }: UseDragHooksProps) => {
  const divideTarget = `${name}${divide}`;

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
      const isFocusApp = app.className.includes(`${divideTarget}-application`);
      app.style.setProperty("z-index", `${isFocusApp ? "9998" : "1"}`);
    };

    const getApps = getElementAttrAll(".app-container");
    getApps.forEach(focusing);
  };

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
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
    const app = getElementAttr(`.${divideTarget}-application`) as HTMLDivElement;
    app.ondragstart = () => false;
  }, []);

  return { divideTarget, onDragStart, changeFocus };
};

export default useDrag;
