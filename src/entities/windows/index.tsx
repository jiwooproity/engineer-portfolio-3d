import { useRecoilValue } from "recoil";
import { windowHistory } from "@/shared/store/atoms";
import { WindowLayout } from "@/shared/layout";

import Memo from "./memo";
import Terminal from "./terminal";
import Folder from "./folder";
import Browser from "./browser";

const APPLICATION_LIST: { [key: string]: JSX.Element } = {
  github: <Browser />,
  memo: <Memo />,
  terminal: <Terminal />,
  folder: <Folder />,
};

const AppLayout = () => {
  const applications = useRecoilValue(windowHistory);

  return applications.map((app, i) => (
    <WindowLayout
      key={app.name}
      name={app.name}
      style={{ zIndex: applications.length - 1 === i ? "9999" : "1" }}
      width={app.width}
      height={app.height}
      divide={app.divide || ""}
    >
      {APPLICATION_LIST[app.name]}
    </WindowLayout>
  ));
};

export { AppLayout };
