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
import Loading from "../pages/Loading";
import UpdateGroup from "../components/myGroup/UpdateGroup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("http://localhost:3000/all-group"),
        element: <Home></Home>,
      },
      {
        path: "/all-groups",
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("http://localhost:3000/all-group"),
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
      {
        path: "/update-group/:id",
        element: (
          <PrivateRoute>
            <UpdateGroup />
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
