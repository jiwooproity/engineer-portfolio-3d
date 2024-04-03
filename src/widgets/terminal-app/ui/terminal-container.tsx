import { Window } from "@/shared/components";

import TerminalSubNavigation from "./terminal-sub-navigation";
import TerminalReleaseInfo from "./terminal-release-info";

const TerminalContainer = () => {
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

export default TerminalContainer;
