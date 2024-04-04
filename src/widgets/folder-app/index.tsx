import "./folder.css";

import { Window } from "@/shared/components";

interface Props {
  name: string;
}

const Folder = (props: Props) => {
  return (
    <Window name={props.name} direction="horizontal">
      <Window.Block className="folder-side-menu">
        <div className="side-navigation">
          <Window.Buttons />
        </div>
      </Window.Block>
      <Window.Block className="folder-main-content">
        <Window.Navigation />
        <Window.Body>
          <div></div>
        </Window.Body>
      </Window.Block>
    </Window>
  );
};

export default Folder;
