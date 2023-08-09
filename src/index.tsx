import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routes/app";
import Business from "./routes/business";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/business",
    element: <Business />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
