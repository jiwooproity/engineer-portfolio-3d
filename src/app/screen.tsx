import "@/shared/assets/css/screen.css";

import { RealTime } from "@/entities/components";

const Screen = () => {
  return (
    <div className="screen-container">
      <div className="screen-top-nav">
        <div className="screen-top-nav-left">
          <img className="screen-top-nav-logo" src="../svgs/apple-logo.svg" />
          <span className="screen-top-nav-title">Finder</span>
        </div>
        <div className="screen-top-nav-right">
          <RealTime />
        </div>
      </div>
      <div className="screen-bottom-nav"></div>
    </div>
  );
};

export default Screen;
