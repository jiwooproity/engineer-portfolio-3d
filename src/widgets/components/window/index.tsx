import "./window.css";

import React, { createContext, useContext } from "react";
import { useWindows } from "@/shared/hooks";

interface Props {
  name: string;
  children: React.ReactNode;
}

interface NavigationProps {
  children?: React.ReactNode;
}

interface BodyProps {
  children: React.ReactNode;
}

const windowContext = createContext({
  name: "",
});

const Window = (props: Props) => {
  return (
    <windowContext.Provider value={{ name: props.name }}>
      <div className={`${props.name}-window-wrapper`}>{props.children}</div>
    </windowContext.Provider>
  );
};

const Navigation = (props: NavigationProps) => {
  const { closeApplication } = useWindows();
  const { name } = useContext(windowContext);

  return (
    <div className={`${name}-navigation-wrapper`}>
      <div className="navigation-btns">
        <button className="app-close" onClick={() => closeApplication(name)} />
        <button className="app-unfold" />
        <button className="app-full" />
      </div>
      {props.children}
    </div>
  );
};

const Body = (props: BodyProps) => {
  const { name } = useContext(windowContext);
  return (
    <div draggable={true} className={`${name}-body-wrapper`}>
      {props.children}
    </div>
  );
};

Window.Navigation = Navigation;
Window.Body = Body;

export default Window;
