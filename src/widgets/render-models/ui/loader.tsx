import styles from "../style/loader.module.css";

import { useEffect, useState } from "react";
import { type ReactNode, type ChangeEvent, type KeyboardEvent } from "react";

import { useProgress } from "@react-three/drei";

const Terminal = ({ children }: { children: ReactNode }) => {
  return (
    <div id="terminal" className={styles.wrapper}>
      <div className={styles.tab}>
        <div className={styles.leftArea}>
          <div className={styles.btnsWrap}>
            <button className={`${styles.btn} app-close`} />
            <button className={`${styles.btn} app-unfold`} />
            <button className={`${styles.btn} app-full`} />
          </div>
        </div>
        <div className={styles.rightArea}>
          <div className={styles.subTab}>
            <span className={styles.TabDir}>~ (-zsh)</span>
          </div>
          <div className={styles.TabAddBtn}>+</div>
        </div>
      </div>
      <div className={styles.contentWrap}>{children}</div>
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
      node = <div className={styles.content}>{text}</div>;
      break;
    case "children":
      node = <div className={styles.content}>{children}</div>;
      break;
    case "loaded":
      const loadStyle = loaded ? styles.loaded : styles.hidden;
      node = <div className={`${styles.content} ${loadStyle}`}>{children}</div>;
      break;
    default:
      break;
  }

  return node;
};

const Progress = ({ percent }: { percent: number }) => {
  const ASCIIS = Array.from({ length: 50 }, () => "-");

  return (
    <span className={styles.progressBarText}>
      {ASCIIS.map((ascii, i) =>
        percent >= i * 2 ? (
          <span key={i} className={styles.downloaded}>
            #
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
    const status = useAuth ? styles.access : styles.failed;

    if (key === "Enter") {
      if (useAuth) setTimeout(() => setReady(true), 2000);
      setMessage(<span className={status}>{message}</span>);
    }
  };

  useEffect(() => {
    if (loaded && !active) {
      const terminal = document.getElementById("terminal");
      const input = document.getElementById("start-cmd");

      input?.focus();
      terminal?.addEventListener("click", () => input?.focus());
      return () => terminal?.removeEventListener("click", () => input?.focus());
    }
  }, [loaded, active]);

  return (
    <div className={`${styles.container} ${ready ? styles.ready : ""}`}>
      <Terminal>
        <Content type="text" text="Loading Resources .." />
        <Content type="children">
          <div className={styles.progressBar}>
            <span className={styles.progressBarPercent}>{`${percent} %`}</span>
            <span className={styles.progressBarTextWrap}>{`models: [`}</span>
            <Progress percent={percent} />
            <span className={styles.progressBarTextWrap}>{`]`}</span>
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
            disabled={message !== null}
            autoComplete="off"
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
