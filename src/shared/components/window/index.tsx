import "./window.css";
import React, { MouseEvent, createContext, useContext } from "react";
import { useWindows } from "@/shared/hooks";

interface Props {
  name: string;
  direction?: "vertical" | "horizontal";
  children: React.ReactNode;
}

interface NavigationProps {
  children?: React.ReactNode;
}

interface BodyProps {
  children: React.ReactNode;
}

interface SideMenuProps {
  width: number | string;
  children: React.ReactNode;
}

const windowContext = createContext({
  name: "",
  direction: "",
});

const Window = ({ name, direction = "vertical", children }: Props) => {
  return (
    <windowContext.Provider value={{ name: name, direction: direction }}>
      <div className={`${name}-window-wrapper ${direction}`}>{children}</div>
    </windowContext.Provider>
  );
};

const Buttons = () => {
  const { closeApplication } = useWindows();
  const { name } = useContext(windowContext);

  const stoppedBubbling = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeApplication(name);
  };

  return (
    <div className="navigation-btns">
      <button className="app-close" onClick={stoppedBubbling} />
      <button className="app-unfold disabled" />
      <button className="app-full disabled" />
    </div>
  );
};

const Block = ({ width, children }: SideMenuProps) => {
  return (
    <div className="window-block" style={{ width }}>
      {children}
    </div>
  );
};

const Navigation = ({ children }: NavigationProps) => {
  const { name } = useContext(windowContext);

  return <div className={`${name}-navigation-wrapper`}>{children}</div>;
};

const Body = ({ children }: BodyProps) => {
  const { name } = useContext(windowContext);

  return (
    <div draggable={true} className={`${name}-body-wrapper`}>
      {children}
    </div>
  );
};

Window.Block = Block;
Window.Navigation = Navigation;
Window.Buttons = Buttons;
Window.Body = Body;

export default Window;
