import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx"
import Courses from "./pages/Courses/Courses.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Join from "./Pages/JoinForFree/JoinForFree.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "join",
        element: <Join />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
