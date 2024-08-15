import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import SingUp from "../Pages/SingUp";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: "/singUp",
            element: <SingUp></SingUp>
        },

      ]
    },
  ]);

  export default router