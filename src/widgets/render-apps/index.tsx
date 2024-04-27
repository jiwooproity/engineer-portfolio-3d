import "./style/style.css";

import { useRecoilValue } from "recoil";
import { windowHistory } from "@/shared/store/atoms";

import { FolderApp, MemoApp, TerminalApp, MusicApp } from "..";
import RenderAppsLayout from "./ui/render-apps-layout";
import { useMemo } from "react";

const APPLICATION_LIST: { [key: string]: ({ name }: { name: string }) => JSX.Element } = {
  memo: () => <MemoApp />,
  terminal: () => <TerminalApp />,
  repository: ({ name }: { name: string }) => <FolderApp name={name} />,
  profile: ({ name }: { name: string }) => <FolderApp name={name} />,
  music: () => <MusicApp />,
};

const RenderApps = () => {
  const applications = useRecoilValue(windowHistory);
  const memoizApps = useMemo(() => applications, [applications]);

  return memoizApps.map((app, i) => {
    const App = APPLICATION_LIST[app.name];

    return (
      <RenderAppsLayout
        key={app.divide || app.name}
        name={app.name}
        style={{ zIndex: memoizApps.length - 1 === i ? "9999" : "1" }}
        width={app.width}
        height={app.height}
        divide={app.divide || ""}
      >
        <App name={app.divide || app.name} />
      </RenderAppsLayout>
    );
  });
};

export default RenderApps;
