// import { getTest } from "./functions/test";
// import { useEffect, useState } from "react";
import HomePage from "./routes/HomePage";
import RegisterPage from "./components/Authentication/Registeration/RegisterPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import LoginPage from "./components/Authentication/Login/LoginPage";
import "./index.css";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./context/user";

export default function App() {
  const [user, setUser] = useState(null);
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
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
      <div>
        <Outlet />
      </div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/search" element={<ResultsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

//   //Calls the test data a single time when the application is loaded and sets its state
//   useEffect(() => {
//     getTest()
//       .then((res) => {
//         setData(res.message);
//       })
//       .catch((err) => console.log(err));
//   }, []);
