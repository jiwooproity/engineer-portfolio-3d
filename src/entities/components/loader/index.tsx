import "@/shared/assets/css/loader.css";

import { useEffect, useState } from "react";
import { type ReactNode, type ChangeEvent, type KeyboardEvent } from "react";

import { useProgress } from "@react-three/drei";

const Terminal = ({ children }: { children: ReactNode }) => {
  return (
    <div id="terminal" className="terminal">
      <div className="terminal-tab">
        <div className="terminal-left-area">
          <div className="terminal-btn-wrap">
            <button className="terminal-btn close" />
            <button className="terminal-btn unfold" />
            <button className="terminal-btn full" />
          </div>
          {/* <div className="terminal-command-wrap">
            <span className="terminal-command">⌥⌘1</span>
          </div> */}
        </div>
        <div className="terminal-right-area">
          <div className="terminal-sub-tab">
            <span className="terminal-sub-tab-dir">~ (-zsh)</span>
          </div>
          <div className="terminal-sub-tab-add">+</div>
        </div>
      </div>
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

const Content = ({
  type,
  loaded,
  text,
  children,
}: {
  type: string;
  loaded?: number | boolean;
  text?: string;
  children?: ReactNode;
}) => {
  let node = null;
  switch (type) {
    case "text":
      node = <div className="content">{text}</div>;
      break;
    case "children":
      node = <div className="content">{children}</div>;
      break;
    case "loaded":
      node = (
        <div className={`content ${loaded ? "loaded" : "hidden"}`}>
          {children}
        </div>
      );
      break;
    default:
      break;
  }

  return node;
};

const Loader = () => {
  const ASCIIS = Array.from({ length: 50 }, () => "-");

  const { progress, loaded, active } = useProgress();
  const percent = Math.floor(progress);

  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [pressKey, setPressKey] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPressKey(value);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (pressKey === "y") {
        setMessage("Success");
        setTimeout(() => setReady(true), 2000);
      } else {
        setMessage("failed ..! please refresh");
      }
    }
  };

  useEffect(() => {
    if (loaded && !active) {
      const input = document.getElementById("start-cmd");
      input?.focus();

      const cmdEnter = () => input?.focus();
      const terminal = document.getElementById("terminal");
      terminal?.addEventListener("click", cmdEnter);
      return () => terminal?.removeEventListener("click", cmdEnter);
    }
  }, [loaded, active]);

  return (
    <div className={`terminal-container ${ready ? "ready" : ""}`}>
      <Terminal>
        <Content type="text" text="Loading Resources .." />
        <Content type="children">
          <div className="progress-bar">
            <span className="progress-bar-percent">{`${percent} %`}</span>
            <span className="progress-bar-text-wrap">{`Models: [`}</span>
            <span className="progress-bar-text">
              {ASCIIS.map((ascii, i) => (percent >= i * 2 ? "=" : ascii))}
            </span>
            <span className="progress-bar-text-wrap">{`]`}</span>
          </div>
        </Content>
        <Content type="loaded" loaded={loaded && !active}>
          If you want to start, press the key (y/n)
          <input
            id="start-cmd"
            type="text"
            value={pressKey}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </Content>
        <Content type="loaded" loaded={message !== ""}>
          {message}
        </Content>
      </Terminal>
    </div>
  );
};

export default Loader;
