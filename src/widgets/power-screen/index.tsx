import style from "./style/power-screen.module.css";

import useBooting from "./lib/use-booting";

import Logo from "./ui/logo";
import ProgressBar from "./ui/progress-bar";

const PowerScreen = () => {
  const [booting, close] = useBooting();

  return (
    <div
      className={style.wrapper}
      style={{ pointerEvents: `${close ? "none" : "all"}`, opacity: `${close ? "0" : "1"}` }}
    >
      <Logo />
      <ProgressBar booting={booting} />
    </div>
  );
};

export default PowerScreen;
