import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./routes/HomePage";
import RegisterPage from "./components/Authentication/Registeration/RegisterPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./CSS/Navbar.css";
import { Provider } from "./context/jobs";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import LoginPage from "./components/Authentication/Login/LoginPage";

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
      <Route path="/search" element={<ResultsPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
