import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AllGroups from "../pages/AllGroups";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyGroup from "../pages/MyGroup";
import NewGroup from "../pages/NewGroup";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        loader: ()=> fetch("http://localhost:3000/create-group"),
        element: <Home></Home>,
      },
      {
        path: "/all-groups",
        element: <AllGroups></AllGroups>,
      },
      {
        path: "/create-group",
        element: (
          <PrivateRoute>
            <NewGroup></NewGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-group",
        element: (
          <PrivateRoute>
            <MyGroup></MyGroup>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
