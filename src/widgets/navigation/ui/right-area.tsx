import style from "../style/navigation.module.css";

import { RealTime } from "@/shared/components";

const RightArea = () => {
  return (
    <div className={style.rightArea}>
      <RealTime />
    </div>
  );
};

export default RightArea;
