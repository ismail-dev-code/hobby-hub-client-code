import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-tooltip/dist/react-tooltip.css'
import { router } from "./routes/router.jsx";
import { Tooltip } from 'react-tooltip'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer position="top-center" />
      <Tooltip id="my-tooltip" />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
