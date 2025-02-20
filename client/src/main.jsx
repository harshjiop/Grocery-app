import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Login, Signup, Product, Cart } from "./pages/index.js";
import UserLayout from "./user/UserLayout.jsx";
import {
  Dashboard,
  Transaction,
  Accounts,
  Orders,
  Cards,
  Settings,
} from "./user/components";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/transaction",
        element: <Transaction />,
      },
      {
        path: "/user/accounts",
        element: <Accounts />,
      },
      {
        path: "/user/orders",
        element: <Orders />,
      },
      {
        path: "/user/cards",
        element: <Cards />,
      },
      {
        path: "/user/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
