import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import Profile from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products/new",
        element: <ProductForm />,
      },
      {
        path: "/products/:id/edit",
        element: <ProductForm />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
