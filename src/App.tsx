import { RenderModel } from "@/page";
import { MainLabels } from "@/components";

import "./style.css";

const App = () => {
  return (
    <div className="main-layout">
      <RenderModel />
      <MainLabels />
    </div>
  );
};

export default App;
