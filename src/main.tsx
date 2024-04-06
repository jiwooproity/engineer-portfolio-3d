import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
