import "@/shared/assets/css/windows/app-layout.css";

import { useRecoilValue } from "recoil";
import { windowHistory } from "@/shared/store/atoms";
import { WindowLayout } from "@/widgets";

import Memo from "./memo";
import Terminal from "./terminal";

const APPLICATION_LIST: { [key: string]: JSX.Element } = {
  memo: <Memo />,
  terminal: <Terminal />,
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
    >
      {APPLICATION_LIST[app.name]}
    </WindowLayout>
  ));
};

export { AppLayout };
