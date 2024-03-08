import "@/shared/assets/css/navigation.css";

import { RealTime } from "@/entities/components";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-left-area">
        <img className="nav-logo" src="../svgs/apple-logo.svg" />
        <span className="nav-title">Finder</span>
        <a
          href="https://github.com/jiwooproity"
          className="nav-item"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <div className="nav-right-area">
        <RealTime />
      </div>
    </div>
  );
};

export default Navigation;
