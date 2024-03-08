import "@/shared/assets/css/screen.css";

import { useState } from "react";

const Screen = () => {
  const [count, setCount] = useState(0);

  const add = () => setCount((count) => count + 1);

  const dis = () => setCount((count) => count - 1);

  return (
    <div className="screen-container">
      <div className="screen-alert">
        <span className="screen-alert-text">{count}</span>
        <div className="screen-alert-btn-box">
          <button onClick={add}>+</button>
          <button onClick={dis}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
