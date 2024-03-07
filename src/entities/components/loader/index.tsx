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

const Progress = ({ percent }: { percent: number }) => {
  const ASCIIS = Array.from({ length: 50 }, () => "-");

  return (
    <span className="progress-bar-text">
      {ASCIIS.map((ascii, i) =>
        percent >= i * 2 ? (
          <span key={i} className="downloaded">
            =
          </span>
        ) : (
          ascii
        )
      )}
    </span>
  );
};

const Loader = () => {
  const { progress, loaded, active } = useProgress();
  const percent = Math.floor(progress);

  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState<ReactNode>(null);
  const [pressKey, setPressKey] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const accessKey = ["y", "n", ""];
    setPressKey(accessKey.includes(value) ? value : pressKey);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    const useAuth = pressKey.toLowerCase() === "y";
    const message = useAuth ? "success" : "failed ..! please refresh";
    const status = useAuth ? "access" : "failed";

    if (key === "Enter") {
      if (useAuth) setTimeout(() => setReady(true), 2000);
      setMessage(<span className={status}>{message}</span>);
    }
  };

  useEffect(() => {
    if (loaded && !active) {
      const terminal = document.getElementById("terminal");
      const input = document.getElementById("start-cmd");
      const inputFocus = () => input?.focus();

      inputFocus();
      terminal?.addEventListener("click", inputFocus);
      return () => terminal?.removeEventListener("click", inputFocus);
    }
  }, [loaded, active]);

  return (
    <div className={`terminal-container ${ready ? "ready" : ""}`}>
      <Terminal>
        <Content type="text" text="Loading Resources .." />
        <Content type="children">
          <div className="progress-bar">
            <span className="progress-bar-percent">{`${percent} %`}</span>
            <span className="progress-bar-text-wrap">{`models: [`}</span>
            <Progress percent={percent} />
            <span className="progress-bar-text-wrap">{`]`}</span>
          </div>
        </Content>
        <Content type="loaded" loaded={loaded && !active}>
          if you want to start, press the key (y/n)
          <input
            id="start-cmd"
            type="text"
            value={pressKey}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </Content>
        <Content type="loaded" loaded={message !== null}>
          zsh: {message}
        </Content>
      </Terminal>
    </div>
  );
};

export default Loader;
