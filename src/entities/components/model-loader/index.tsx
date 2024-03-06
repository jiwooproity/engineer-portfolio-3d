import "@/shared/assets/css/model-loader.css";

import { useProgress } from "@react-three/drei";
import { useState } from "react";

const ASCIIS = Array.from({ length: 50 }, () => "-");

const ModelLoader = () => {
  const { progress, loaded, active } = useProgress();
  const percent = Math.floor(progress);

  const [ready, setReady] = useState(false);

  const onReady = () => setReady(true);

  return (
    <div className={`progress-container ${ready ? "ready" : ""}`}>
      <div className="progress-wrapper">
        <span className="progress-bar-text-wrap">{`[`}</span>
        <div className="progress-bar">
          <span className="progress-bar-percent">{`${percent} %`}</span>
          <span className="progress-bar-text">
            {ASCIIS.map((ascii, i) => (percent >= i * 2 ? "=" : ascii))}
          </span>
        </div>
        <span className="progress-bar-text-wrap">{`]`}</span>
      </div>
      <div className={`btn-wrapper ${loaded && !active ? "loaded" : ""}`}>
        <button className="load-btn" onClick={onReady}>
          Ready
        </button>
      </div>
    </div>
  );
};

export default ModelLoader;
