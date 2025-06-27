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
import GroupDetails from "../components/allGroup/GroupDetails";
import AboutUs from "../pages/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Overview";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import Career from "../pages/Career";
import HelpCenter from "../pages/HelpCenter";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CommunityGuidelines from "../pages/CommunityGuidelines";
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
      {
        path: "/details-group/:id",
        element: (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/careers",
        Component: Career,
      },
      {
        path: "/help",
        Component: HelpCenter,
      },
      {
        path: "/terms",
        Component: TermsAndConditions,
      },
      {
        path: "/privacy",
        Component: PrivacyPolicy,
      },
      {
        path: "/community",
        Component: CommunityGuidelines,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "my-group",
        Component: MyGroup,
      },
      {
        path: "new-group",
        Component: NewGroup,
      },
    ],
  },
]);
