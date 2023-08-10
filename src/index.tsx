import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routes/app";
import Business from "./routes/business";
import { BusinessProvider } from "./contexts/BusinessContext";

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
    <BusinessProvider>
      <RouterProvider router={router} />
    </BusinessProvider>
  </React.StrictMode>,
);
