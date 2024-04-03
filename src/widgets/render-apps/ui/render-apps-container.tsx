import { useRecoilValue } from "recoil";
import { windowHistory } from "@/shared/store/atoms";
import { FolderApp, MemoApp, TerminalApp } from "@/widgets";

import RenderAppsLayout from "./render-apps-layout";

const APPLICATION_LIST: { [key: string]: ({ name }: { name: string }) => JSX.Element } = {
  memo: () => <MemoApp />,
  terminal: () => <TerminalApp />,
  repository: ({ name }: { name: string }) => <FolderApp name={name} />,
  profile: ({ name }: { name: string }) => <FolderApp name={name} />,
};

const RenderAppsContainer = () => {
  const applications = useRecoilValue(windowHistory);

  return applications.map((app, i) => {
    const App = APPLICATION_LIST[app.name];

    return (
      <RenderAppsLayout
        key={app.divide || app.name}
        name={app.name}
        style={{ zIndex: applications.length - 1 === i ? "9999" : "1" }}
        width={app.width}
        height={app.height}
        divide={app.divide || ""}
      >
        <App name={app.divide || app.name} />
      </RenderAppsLayout>
    );
  });
};

export { RenderAppsContainer };
