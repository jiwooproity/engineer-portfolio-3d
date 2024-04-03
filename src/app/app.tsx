import "./style.css";
import Outline from "./outline";

import { Main, Mobile } from "@/page";

const App = () => {
  const width = window.innerWidth;

  return (
    <div className="main-layout">
      {width > 768 ? (
        <>
          <Main />
          <Outline />
        </>
      ) : (
        <>
          <Mobile />
        </>
      )}
    </div>
  );
};

export default App;
