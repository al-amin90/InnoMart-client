import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import SingUp from "../Pages/SingUp";
import Login from "../Pages/Login";

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
        {
            path: "/login",
            element: <Login></Login>
        },

      ]
    },
  ]);

  export default router