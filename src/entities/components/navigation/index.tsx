import "@/shared/assets/css/navigation.css";

import { RealTime } from "@/entities/components";
import { useCheckOS } from "@/shared/hooks";

const Navigation = () => {
  const OS = useCheckOS();

  return (
    <div className="nav-container">
      <div className="nav-left-area">
        <img className="nav-logo" src="../svgs/apple-logo.svg" />
        <span className={`nav-title ${OS}`}>Finder</span>
        <span className={`nav-item ${OS}`}>File</span>
      </div>
      <div className="nav-right-area">
        <RealTime />
      </div>
    </div>
  );
};

export default Navigation;
