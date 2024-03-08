import { createBrowserRouter } from "react-router-dom";

import App from "@/app/app";
import Screen from "@/page/screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/screen",
    element: <Screen />,
  },
]);

export default router;
