import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./components/Pages/Search";
import Offers from "./components/Pages/Offers";
import Help from "./components/Pages/Help";
import Cart from "./components/Pages/Cart";
import Auth from "./components/Pages/Auth";
import RestaurantChain from "./components/RestaurantChain";
import Body from "./components/Body";

import CuisnesCarousal from "./components/CuisinesCarasoul";
import RestaurantMenu from "./components/RestaurantMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/", // Nested route for "/"
        element: (
          <>
            <CuisnesCarousal />
            <RestaurantChain />
            <Body />
          </>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offer",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurantMenu/:resid",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<CuisinesCarasoul />
      <RestaurantChain />
      <Body />
      <BestPlace />
      <Cusines />
      <Explore />
*/
