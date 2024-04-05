import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Screen from "./screen";
import App from "@/app/app";

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

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
