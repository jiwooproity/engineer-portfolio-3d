import "@/shared/assets/css/screen/screen.css";

import { Applications, LockScreen, Navigation } from "@/entities/components";
import { AppLayout } from "@/entities/windows";

const Screen = () => {
  return (
    <div className="screen-container">
      <Navigation />
      <Applications />
      <AppLayout />
      <div className="screen-bottom-nav"></div>
      <LockScreen />
    </div>
  );
};

export default Screen;
