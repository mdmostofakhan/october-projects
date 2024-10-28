import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Sign from "../pages/sign/Sign";
import CheckOut from "../pages/checkout/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Sign></Sign>,
      },
      {
        path: "/checkout/:_id",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);

export default router;
