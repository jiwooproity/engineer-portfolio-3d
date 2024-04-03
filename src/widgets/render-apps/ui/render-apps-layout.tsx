import { CSSProperties, ReactNode } from "react";
import useDrag from "../lib/use-drag";

interface RenderAppsLayoutPropsIF {
  name: string;
  width: number;
  height: number;
  divide: string; // Folder와 같은 동일한 애플리케이션을 멀티 윈도우 처리를 하기 위한 구분
  style: CSSProperties;
  children: ReactNode;
}

const RenderAppsLayout = (props: RenderAppsLayoutPropsIF) => {
  const { name, divide, width, height, style, children } = props;
  const { divideTarget, onDragStart, changeFocus } = useDrag({ name, divide });

  return (
    <div
      className={`app-container ${divideTarget}-application`}
      style={{ ...style, width, height }}
      draggable={true}
      onDragStart={onDragStart}
      onClick={changeFocus}
    >
      {children}
    </div>
  );
};

export default RenderAppsLayout;
