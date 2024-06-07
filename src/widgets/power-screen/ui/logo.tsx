import style from "../style/power-screen.module.css";

type PowerLogoType = ({ booting }: { booting: boolean }) => JSX.Element;

const Logo: PowerLogoType = ({ booting }) => {
  return (
    <img
      className={style.appleLogo}
      style={{ opacity: `${booting ? "1" : "0"}` }}
      width={200}
      height={200}
      src="../svgs/power-logo.svg"
    />
  );
};

export default Logo;
