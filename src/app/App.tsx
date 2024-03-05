import { RenderModel } from "@/page";
import { MainOutline } from "@/entities/components";

import "./style.css";

const App = () => {
  return (
    <div className="main-layout">
      <RenderModel />
      <MainOutline />
    </div>
  );
};

export default App;
