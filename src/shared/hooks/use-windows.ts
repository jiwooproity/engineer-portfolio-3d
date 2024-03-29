import { useRecoilState } from "recoil";
import { windowHistory, windowKeyHistory } from "@/shared/store/atoms";
import { type AppOptionsIF } from "@/shared/store/atoms/window-history";

const APP_LITS = [
  { icon: "app-notion", name: "Notion" },
  { icon: "app-github", name: "GitHub" },
  { icon: "app-terminal", name: "Terminal" },
  { icon: "app-memo", name: "Memo" },
  { icon: "app-folder", name: "Repository" },
  { icon: "app-folder", name: "Profile" },
];

const WINDOWS = {
  MEMO: "memo",
  TERMINAL: "terminal",
  FOLDER: "folder",
};

const WINDOW_LIST: { [key: string]: AppOptionsIF } = {
  memo: {
    name: "memo",
    width: 1500,
    height: 800,
  },
  terminal: {
    name: "terminal",
    width: 800,
    height: 530,
  },
  folder: {
    name: "folder",
    width: 800,
    height: 530,
  },
};

const useWindows = () => {
  const [history, setHistory] = useRecoilState(windowHistory);
  const [_, setKeyHistory] = useRecoilState(windowKeyHistory);

  const openApplication = (name: string, divide?: string) => {
    if (divide) {
      if (history.find((his) => his.divide === divide)) return;
      setHistory((history) => [...history, { ...WINDOW_LIST[name], divide }]);
    } else {
      if (history.find((his) => his.name === name)) return;
      setHistory((history) => [...history, WINDOW_LIST[name]]);
      setKeyHistory((history) => ({ ...history, [name]: true }));
    }
  };

  const closeApplication = (name: string) => {
    const filter = history.filter((his) => his.name !== name);
    setHistory([...filter]);
    setKeyHistory((history) => ({ ...history, [name]: false }));
  };

  return { APP_LITS, WINDOWS, openApplication, closeApplication };
};

export default useWindows;
