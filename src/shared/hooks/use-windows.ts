import { useRecoilState } from "recoil";
import { windowHistory } from "@/shared/store/atoms";

const WINDOWS = {
  MEMO: "memo",
  TERMINAL: "terminal",
};

const useWindows = () => {
  const [_, setHistory] = useRecoilState(windowHistory);

  const changeStatus = (name: string, status: boolean) => {
    setHistory((history) => ({
      ...history,
      [name]: { ...history[name], status },
    }));
  };

  const openApplication = (name: string) => {
    changeStatus(name, true);
  };

  const closeApplication = (name: string) => {
    changeStatus(name, false);
  };

  return { WINDOWS, openApplication, closeApplication };
};

export default useWindows;
