import { useRecoilValue } from "recoil";
import { windowHistory } from "@/shared/store/atoms";
import { WindowLayout } from "@/shared/layout";

import { FolderApp, MemoApp, TerminalApp } from "..";

const APPLICATION_LIST: { [key: string]: ({ name }: { name: string }) => JSX.Element } = {
  memo: () => <MemoApp />,
  terminal: () => <TerminalApp />,
  repository: ({ name }: { name: string }) => <FolderApp name={name} />,
  profile: ({ name }: { name: string }) => <FolderApp name={name} />,
};

const AppLayout = () => {
  const applications = useRecoilValue(windowHistory);

  return applications.map((app, i) => {
    const App = APPLICATION_LIST[app.name];

    return (
      <WindowLayout
        key={app.divide || app.name}
        name={app.name}
        style={{ zIndex: applications.length - 1 === i ? "9999" : "1" }}
        width={app.width}
        height={app.height}
        divide={app.divide || ""}
      >
        <App name={app.divide || app.name} />
      </WindowLayout>
    );
  });
};

export { AppLayout };
