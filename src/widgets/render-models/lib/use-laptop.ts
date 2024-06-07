import { useRecoilState } from "recoil";
import { zoomToggle } from "@/shared/store/atoms";

const useLaptop = () => {
  const [laptop, setLaptop] = useRecoilState(zoomToggle);

  const toggle = () => {
    setLaptop(!laptop);
  };

  const sendToIframe = () => {
    const iframe = document.getElementById("iframe") as HTMLIFrameElement;
    iframe.contentWindow?.postMessage({ booting: true }, "*");
  };

  const active = (on: boolean) => {
    setLaptop(on);
    sendToIframe();
  };

  return { laptop, toggle, active };
};

export default useLaptop;
