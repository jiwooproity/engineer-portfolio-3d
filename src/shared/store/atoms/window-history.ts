import { atom } from "recoil";

export interface AppOptionsIF {
  name: string;
  width: number;
  height: number;
}

const DEFAULT_APP: AppOptionsIF[] = [];

const windowHistory = atom<AppOptionsIF[]>({
  key: "window-history",
  default: DEFAULT_APP,
});

export default windowHistory;
