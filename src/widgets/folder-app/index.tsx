import "./style/folder.css";

import { Window } from "@/shared/components";

interface Props {
  name: string;
}

const Folder = ({ name }: Props) => {
  return (
    <Window name={name} direction="horizontal">
      <Window.Block width="200px">
        <div className="side-navigation">
          <Window.Buttons />
        </div>
      </Window.Block>
      <Window.Block width="100%">
        <Window.Navigation />
        <Window.Body>
          <div></div>
        </Window.Body>
      </Window.Block>
    </Window>
  );
};

export default Folder;
