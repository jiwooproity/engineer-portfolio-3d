import "./style.css";
import Routing from "@/page";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Routing />
      </div>
    </BrowserRouter>
  );
};

export default App;
