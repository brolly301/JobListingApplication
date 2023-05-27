// import { getTest } from "./functions/test";
// import { useEffect, useState } from "react";
import HomePage from "./routes/HomePage";
import RegisterPage from "./routes/RegisterPage";
import ResultsPage from "./routes/ResultsPage";
import LoginPage from "./routes/LoginPage";
import "./index.css";
import {
  Link,
  Outlet,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/user";
import { getUser, logout } from "./APIs/authentication";
import ProfilePage from "./routes/ProfilePage";
import { getPreferences } from "./APIs/profile";

export default function App() {
  const route = useNavigate();
  const [userData, setUserData] = useState({
    user: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [userPreferences, setUserPreferences] = useState({
    salary: "",
    location: "",
    jobTitle: "",
    jobType: "",
  });

  useEffect(() => {
    const data = getPreferences().then((res) => {
      setUserPreferences({
        salary: res.salary || "",
        location: res.location || "",
        jobTitle: res.jobTitle || "",
        jobType: res.jobType || "",
      });
    });
    // return () => data;
  }, []);

  useEffect(() => {
    const userData = getUser()
      .then((res) => {
        if (res.error) return console.log(res.error);
        else
          setUserData({
            user: res.username,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            phoneNumber: res.phoneNumber,
            location: res.location,
          });
      })
      .catch((err) => console.log(err));
  }, [userData.user]);

  const handleLogout = (e) => {
    e.preventDefault();
    logout().then((message) => {
      console.log(message);
      setUserData({
        user: null,
      });
      route("/");
    });
  };

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
        {!userData.user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </>
        )}
      </ul>
      <div>
        <Outlet />
      </div>
      <UserContext.Provider
        value={{ userData, setUserData, userPreferences, setUserPreferences }}
      >
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/search" element={<ResultsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/register"
            element={
              userData.user ? <Navigate replace to="/" /> : <RegisterPage />
            }
          />
          <Route
            path="/login"
            element={
              userData.user ? <Navigate replace to="/" /> : <LoginPage />
            }
          />
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
