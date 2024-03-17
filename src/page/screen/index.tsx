import "@/shared/assets/css/screen/screen.css";

import { MouseEvent, useMemo } from "react";

import { Applications, LockScreen } from "@/entities/components";
import { Navigation, Docs } from "@/entities/components";
import { AppLayout } from "@/entities/windows";

const Screen = () => {
  const sounds = useMemo(() => {
    const mousedown = new Audio("../sound/mouse-down.mp3");
    mousedown.volume = 0.1;
    const mouseup = new Audio("../sound/mouse-up.mp3");
    mouseup.volume = 0.1;
    return [mousedown, mouseup];
  }, []);

  const playEffect = (e: MouseEvent) => {
    sounds.map((sound) => (sound.currentTime = 0));
    if (e.type === "mousedown") sounds[0].play();
    else if (e.type === "mouseup") sounds[1].play();
  };

  return (
    <div
      className="screen-container"
      onMouseDown={playEffect}
      onMouseUp={playEffect}
    >
      <Navigation />
      <Applications />
      <AppLayout />
      <Docs />
      <LockScreen />
    </div>
  );
};

export default Screen;
