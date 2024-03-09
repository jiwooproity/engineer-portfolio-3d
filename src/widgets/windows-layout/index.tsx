import "@/shared/assets/css/windows/app-layout.css";

import { ReactNode } from "react";

interface WindowLayoutPropsIF {
  width: number;
  height: number;
  children: ReactNode;
}

const WindowLayout = (props: WindowLayoutPropsIF) => {
  const { width, height, children } = props;

  return (
    <div className="app-container" style={{ width, height }}>
      {children}
    </div>
  );
};

export default WindowLayout;
