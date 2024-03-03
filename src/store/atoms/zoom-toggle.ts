import { atom } from "recoil";

type ZoomToggleIF = boolean;

const DEFAULT_VALUE = false;

const zoomToggle = atom<ZoomToggleIF>({
  key: "zoom-toggle",
  default: DEFAULT_VALUE,
});

export default zoomToggle;
