import { atom } from "recoil";

export interface AppOptionsIF {
  name: string;
  width: number;
  height: number;
  divide?: string; // 폴더 구분을 위한 프로퍼티
}

const DEFAULT_APP: AppOptionsIF[] = [];

export const windowHistory = atom<AppOptionsIF[]>({
  key: "window-history",
  default: DEFAULT_APP,
});

export const windowKeyHistory = atom<{ [key: string]: boolean }>({
  key: "window-key-history",
  default: {},
});
