import "@/assets/css/main-labels/index.css";

const MainLabels = () => {
  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");

  return (
    <div className="labels-container">
      <div className="labels-git-box">
        <img className="labels-git-icon" src="../svgs/github-mark.svg" />
        <a
          className="labels-git-link"
          href="https://github.com/jiwooproity"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <span className="labels-date">{`${year}/${month}/${day}`}</span>
    </div>
  );
};

export default MainLabels;