import { createBrowserRouter } from "react-router-dom";

import Canvas from "@/app/canvas";
import Screen from "@/app/screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Canvas />,
  },
  {
    path: "/screen",
    element: <Screen />,
  },
]);

export default router;
