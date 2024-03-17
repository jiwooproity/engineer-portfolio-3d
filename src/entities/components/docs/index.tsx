import "@/shared/assets/css/screen/docs.css";

import { MouseEvent } from "react";

import { useWindows } from "@/shared/hooks";

const Docs = () => {
  const { APP_LITS, WINDOWS, openApplication } = useWindows();

  const onDoubleClick = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    const value = current.dataset["value"] as string;
    const divide = current.dataset["divide"] as string;

    const anchor = document.createElement("a");
    anchor.setAttribute("target", "_blank");

    switch (value) {
      case "app-github":
        anchor.setAttribute("href", "https://github.com/jiwooproity");
        anchor.click();
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

  return (
    <>
      <div className="screen-identy" />
      <div className="screen-docs">
        {APP_LITS.map((app) => (
          <div
            key={app.name}
            style={{ display: app.icon === "app-folder" ? "none" : "" }}
            className="docs-application"
            data-value={app.icon}
            data-divide={app.name}
            onDoubleClick={onDoubleClick}
          >
            <div className="tooltip">
              <span className="tooltip-label">{app.name}</span>
            </div>
            <div className={`application-icon ${app.icon}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Docs;
