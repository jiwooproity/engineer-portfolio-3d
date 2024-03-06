import "@/shared/assets/css/outline.css";

const Outline = () => {
  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");

  return (
    <div className="outline-container">
      <div className="outline-top">
        <h1 className="outline-logo">PORTFOLIO _</h1>
      </div>
      <div className="outline-bottom">
        <div className="outline-link-list">
          <a
            className="outline-link"
            href="https://github.com/jiwooproity"
            target="_blank"
          >
            Git
          </a>
          <a
            className="outline-link"
            href="https://www.notion.so/Resume-1579598f11a14aa5bfc83c3606914732"
            target="_blank"
          >
            Notion
          </a>
        </div>
        <span className="outline-date">{`${year}/${month}/${day}`}</span>
      </div>
    </div>
  );
};

export default Outline;
