import { useRecoilState } from "recoil";
import { zoomToggle } from "@/shared/store/atoms";

const useLaptop = () => {
  const [laptop, setLaptop] = useRecoilState(zoomToggle);

  const toggle = () => {
    setLaptop(!laptop);
  };

  const active = (on: boolean) => {
    setLaptop(on);
  };

  return { laptop, toggle, active };
};

export default useLaptop;
