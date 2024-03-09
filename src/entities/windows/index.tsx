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

  return Object.keys(applications).map((app) =>
    applications[app].status ? (
      <WindowLayout
        key={app}
        width={applications[app].width}
        height={applications[app].height}
      >
        {APPLICATION_LIST[app]}
      </WindowLayout>
    ) : null
  );
};

export { AppLayout };
