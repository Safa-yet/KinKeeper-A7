import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Roots from "./Router/Roots.jsx";
import Home from "./Pages/Home Page/Home.jsx";
import Timeline from "./Pages/Timeline Page/Timeline.jsx";
import Stats from "./Pages/Stats Page/Stats.jsx";
import UserDetails from "./Components/User Details/UserDetails.jsx";
import { ToastContainer } from "react-toastify";
import CallingContext from "./Context Data/CallingContext.jsx";
import EroorPage from "./Pages/Error Page/ErrorPage.jsx";
import ErrorPage from "./Pages/Error Page/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "/user/:id",
        Component: UserDetails,
      },
    ],
  },
  {
    path : "*",
    Component : ErrorPage
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CallingContext>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </CallingContext>
  </StrictMode>,
);
