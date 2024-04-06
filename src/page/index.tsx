import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./main";
import Screen from "./screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/screen",
    element: <Screen />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
