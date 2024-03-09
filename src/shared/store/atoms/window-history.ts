import { atom } from "recoil";

interface AppOptionsIF {
  width: number;
  height: number;
  status: boolean;
}

const DEFAULT_APP = {
  memo: {
    width: 1500,
    height: 800,
    status: false,
  },
};

const windowHistory = atom<{ [key: string]: AppOptionsIF }>({
  key: "window-history",
  default: DEFAULT_APP,
});

export default windowHistory;
