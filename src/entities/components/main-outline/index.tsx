import "@/shared/assets/css/main-outline/index.css";

const MainOutline = () => {
  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");

  return (
    <div className="outline-container">
      <div className="outline-git-box">
        {/* <img className="outline-git-icon" src="../svgs/github-mark.svg" /> */}
        <a
          className="outline-git-link"
          href="https://github.com/jiwooproity"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <span className="outline-date">{`${year}/${month}/${day}`}</span>
    </div>
  );
};

export default MainOutline;
