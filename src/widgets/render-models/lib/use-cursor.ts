import { zoomToggle } from "@/shared/store/atoms";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

const useCursor = () => {
  const laptop = useRecoilValue(zoomToggle);

  const [hovered, setHovered] = useState(false);
  const tooltip = useMemo(() => document.getElementById("tooltip") as HTMLDivElement, []);
  const [balloon, text] = useMemo(
    () => [tooltip.children[0], tooltip.children[1]],
    [tooltip]
  ) as HTMLSpanElement[];

  const changeColor = (
    el: HTMLElement,
    attr: "backgroundColor" | "color" | "borderTop" | "borderRight",
    color: string
  ) => {
    el.style[attr] = color;
  };

  const pointerOver = () => {
    setHovered(true);
  };

  const pointerOut = () => {
    setHovered(false);
  };

  const switchingCursor = useCallback(() => {
    document.body.style.cursor = hovered ? "pointer" : "";
  }, [hovered]);

  const switchingTooltip = useCallback(
    (show: boolean) => {
      changeColor(tooltip, "backgroundColor", `rgba(0, 0, 0, ${show ? "0.8" : "0"})`);
      changeColor(balloon, "borderTop", `5px solid rgba(0, 0, 0, ${show ? "0.8" : "0"})`);
      changeColor(balloon, "borderRight", `5px solid rgba(0, 0, 0, ${show ? "0.8" : "0"})`);
      changeColor(text, "color", `rgba(255, 255, 255, ${show ? "1" : "0"})`);
    },
    [balloon, text, tooltip]
  );

  const pointerMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!laptop) {
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX + 25}px`;
        switchingTooltip(hovered);
      }

      switchingCursor();
    },
    [hovered, laptop, switchingCursor, switchingTooltip, tooltip.style]
  );

  useEffect(() => {
    switchingTooltip(!laptop);
  }, [laptop, switchingTooltip]);

  useEffect(() => {
    document.addEventListener("mousemove", pointerMove);
    return () => {
      document.removeEventListener("mousemove", pointerMove);
    };
  }, [hovered, pointerMove]);

  return { pointerOver, pointerOut };
};

export default useCursor;
