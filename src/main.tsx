import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { RecoilRoot } from "recoil";

import router from "@/shared/router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
