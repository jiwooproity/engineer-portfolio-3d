import "./style.css";

import { Main } from "@/page";
import { Outline } from "@/entities/components";

const Canvas = () => {
  return (
    <div className="main-layout">
      <Main />
      <Outline />
    </div>
  );
};

export default Canvas;
