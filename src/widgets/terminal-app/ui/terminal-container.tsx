import { Window } from "@/widgets/components";

import TerminalSubNavigation from "./terminal-sub-navigation";
import TerminalReleaseInfo from "./terminal-release-info";

const TerminalContainer = () => {
  return (
    <Window name="terminal">
      <Window.Navigation>
        <TerminalSubNavigation />
      </Window.Navigation>
      <Window.Body>
        <TerminalReleaseInfo />
      </Window.Body>
    </Window>
  );
};

export default TerminalContainer;
