import "@/shared/assets/css/screen.css";

import { Navigation } from "@/entities/components";

const Screen = () => {
  return (
    <div className="screen-container">
      <Navigation />
      <div className="screen-bottom-nav"></div>
    </div>
  );
};

export default Screen;
