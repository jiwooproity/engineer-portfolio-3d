import "./style.css";

import { Main, Mobile } from "@/page";
import { Outline } from "@/widgets/components";

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
