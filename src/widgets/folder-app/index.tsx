import "./folder.css";

import { Window } from "@/widgets/components";

interface Props {
  name: string;
}

const Folder = (props: Props) => {
  return (
    <Window name={props.name}>
      <Window.Navigation />
      <Window.Body>
        <div></div>
      </Window.Body>
    </Window>
  );
};

export default Folder;
