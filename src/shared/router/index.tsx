import App from "@/app/app";
import { Screen } from "@/page";
import { createBrowserRouter } from "react-router-dom";

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
