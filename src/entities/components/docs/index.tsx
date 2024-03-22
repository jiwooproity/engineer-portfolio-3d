import "@/shared/assets/css/screen/docs.css";

import { useApplication } from "@/shared/hooks";

const Docs = () => {
  const options = useApplication();
  const { APP_LITS, showApp } = options;

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
            onDoubleClick={showApp}
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
