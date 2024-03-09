import "@/shared/assets/css/screen/screen.css";

import { Applications, LockScreen, Navigation } from "@/entities/components";

const Screen = () => {
  return (
    <div className="screen-container">
      <Navigation />
      <Applications />
      <div className="screen-bottom-nav"></div>
      <LockScreen />
    </div>
  );
};

export default Screen;
