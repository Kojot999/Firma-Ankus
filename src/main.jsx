import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./app/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import HomePage from "@pages/HomePage/index.jsx";
import OfertPage from "@pages/OfertPage/index.jsx";
import ContactPage from "@pages/ContactPage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/oferta",
        element: <OfertPage />,
      },
      {
        path: "/kontakt",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
