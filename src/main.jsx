import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import { router } from "./routes/router.jsx";
import { Tooltip } from "react-tooltip";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <ToastContainer position="top-right" />
      <Tooltip id="my-tooltip" className="z-[9999]" />
      <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
);
