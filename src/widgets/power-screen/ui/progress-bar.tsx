import style from "../style/power-screen.module.css";

type PowerProgressBarType = ({ booting }: { booting: boolean }) => JSX.Element;

const ProgressBar: PowerProgressBarType = ({ booting }) => {
  return (
    <div className={style.progressBarWrapper} style={{ opacity: `${booting ? "1" : "0"}` }}>
      <div className={style.progressBar} style={{ width: `${booting ? "100%" : "0%"}` }}></div>
    </div>
  );
};

export default ProgressBar;
