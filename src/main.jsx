import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AuthProviders from "./Providers/AuthProviders";

createRoot(document.getElementById("root")).render(
  <div className=" max-w-7xl mx-auto">
    <StrictMode>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </StrictMode>
  </div>
);
