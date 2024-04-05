import "./style/terminal.css";

import { Window } from "@/shared/components";
import TerminalSubNavigation from "./ui/terminal-sub-navigation";
import TerminalReleaseInfo from "./ui/terminal-release-info";

const Terminal = () => {
  return (
    <Window name="terminal">
      <Window.Navigation>
        <Window.Buttons />
        <TerminalSubNavigation />
      </Window.Navigation>
      <Window.Body>
        <TerminalReleaseInfo />
      </Window.Body>
    </Window>
  );
};

export default Terminal;
