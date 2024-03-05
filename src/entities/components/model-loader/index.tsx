import "@/shared/assets/css/model-loader/index.css";

import { Html, useProgress } from "@react-three/drei";

const ASCIIS = Array.from({ length: 50 }, () => "");

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="progress-container">
      <span className="progress-bar-text-wrap">{`[`}</span>
      <div className="progress-bar">
        <span className="progress-bar-percent">{`${progress} %`}</span>
        <span className="progress-bar-text">
          {ASCIIS.map((ascii, i) => (progress >= i * 2 ? " # " : ascii))}
        </span>
      </div>
      <span className="progress-bar-text-wrap">{`]`}</span>
    </div>
  );
};

const ModelLoader = () => {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <ProgressBar progress={Math.floor(progress > 90 ? 100 : progress)} />
    </Html>
  );
};

export default ModelLoader;
