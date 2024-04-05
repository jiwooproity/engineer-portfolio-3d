import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import Routing from "./page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Routing />
  </RecoilRoot>
);
