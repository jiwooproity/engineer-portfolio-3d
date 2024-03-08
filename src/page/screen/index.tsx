import "@/shared/assets/css/screen.css";

import { LockScreen, Navigation } from "@/entities/components";

const Screen = () => {
  return (
    <div className="screen-container">
      <Navigation />
      <div className="screen-bottom-nav"></div>
      <LockScreen />
    </div>
  );
};

export default Screen;
