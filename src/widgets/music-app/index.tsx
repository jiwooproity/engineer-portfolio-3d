import "./style/music.css";

import useLoader from "./lib/use-loader";
import { Window } from "@/shared/components";
import AudioList from "./ui/audio-list";
import AudioController from "./ui/audio-controller";
import { useState } from "react";

const MusicApp = () => {
  const [audioList] = useLoader();
  const [select, setSelect] = useState("");

  const onSelect = (title: string) => {
    setSelect(title);
  };

  return (
    <Window name="music">
      <Window.Navigation>
        <Window.Buttons />
      </Window.Navigation>
      <Window.Body>
        <AudioList select={select} data={audioList} onSelect={onSelect} />
        <AudioController select={select} />
      </Window.Body>
    </Window>
  );
};

export default MusicApp;
