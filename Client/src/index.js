import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./routes/HomePage";
import RegisterPage from "./components/Authentication/Registeration/RegisterPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./CSS/Navbar.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

const Root = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Find Jobs</Link>
        </li>
        <li>
          <Link to="/profile">Upload CV</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" index element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/search" element={<ResultsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
