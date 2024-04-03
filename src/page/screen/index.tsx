import "./screen.css";

import { MouseEvent, useMemo } from "react";

import { Applications, LockScreen } from "@/entities/components";
import { Navigation, Dock } from "@/entities/components";

import RenderApps from "@/widgets/render-apps";

const Screen = () => {
  const sounds = useMemo(() => {
    const mousedown = new Audio("../sound/mouse-down.mp3");
    mousedown.volume = 0.1;
    const mouseup = new Audio("../sound/mouse-up.mp3");
    mouseup.volume = 0.1;
    return [mousedown, mouseup];
  }, []);

  const playEffect = (e: MouseEvent) => {
    e.stopPropagation();
    sounds.map((sound) => (sound.currentTime = 0));
    if (e.type === "mousedown") sounds[0].play();
    else if (e.type === "mouseup") sounds[1].play();
  };

  return (
    <div className="screen-container" onMouseDown={playEffect} onMouseUp={playEffect}>
      <Navigation />
      <Applications />
      <RenderApps />
      <Dock />
      <LockScreen />
    </div>
  );
};

export default Screen;
