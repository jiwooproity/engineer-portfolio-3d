import { Route, Routes } from "react-router-dom";

import Main from "./main";
import Screen from "./screen";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/screen" element={<Screen />} />
    </Routes>
  );
};

export default Routing;
