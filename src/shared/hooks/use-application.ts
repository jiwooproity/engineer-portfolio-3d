import { MouseEvent, useState } from "react";
import { useWindows } from ".";

const useApplication = () => {
  const { APP_LITS, WINDOWS, openApplication } = useWindows();

  const [selected, setSelected] = useState("");

  const showApp = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    const value = current.dataset["value"] as string;
    const divide = current.dataset["divide"] as string;

    const anchor = document.createElement("a");
    anchor.setAttribute("target", "_blank");

    switch (value) {
      case "app-github":
        // anchor.setAttribute("href", "https://github.com/jiwooproity");
        // anchor.click();
        openApplication(WINDOWS.GITHUB);
        break;
      case "app-notion":
        anchor.setAttribute(
          "href",
          "https://www.notion.so/Resume-1579598f11a14aa5bfc83c3606914732"
        );
        anchor.click();
        break;
      case "app-memo":
        openApplication(WINDOWS.MEMO);
        break;
      case "app-terminal":
        openApplication(WINDOWS.TERMINAL);
        break;
      case "app-folder":
        openApplication(WINDOWS.FOLDER, divide);
        break;
      default:
        break;
    }
  };

  const initSelected = (e: globalThis.MouseEvent) => {
    const target = e.target;
    const current = e.currentTarget;
    if (target === current) setSelected("");
  };

  const focusSelected = (icon: string) => setSelected(icon);

  return { APP_LITS, selected, initSelected, focusSelected, showApp };
};

export default useApplication;
