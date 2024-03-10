import { useRecoilState } from "recoil";
import { windowHistory } from "@/shared/store/atoms";
import { type AppOptionsIF } from "@/shared/store/atoms/window-history";

const WINDOWS = {
  MEMO: "memo",
  TERMINAL: "terminal",
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
};

const useWindows = () => {
  const [history, setHistory] = useRecoilState(windowHistory);

  const openApplication = (name: string) => {
    if (history.find((his) => his.name === name)) return;
    setHistory((history) => [...history, WINDOW_LIST[name]]);
  };

  const closeApplication = (name: string) => {
    const filter = history.filter((his) => his.name !== name);
    setHistory([...filter]);
  };

  return { WINDOWS, openApplication, closeApplication };
};

export default useWindows;
