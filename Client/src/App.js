// import { getTest } from "./functions/test";
// import { useEffect, useState } from "react";
import HomePage from "./routes/HomePage";
import RegisterPage from "./routes/RegisterPage";
import ResultsPage from "./routes/ResultsPage";
import LoginPage from "./routes/LoginPage";
import JobPage from "./routes/JobPage";
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
import { getPreferences, getSkills } from "./APIs/profile";

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

  const [userSkills, setUserSkills] = useState({
    workExperience: "",
    education: "",
    skills: "",
    languages: "",
  });

  useEffect(() => {
    const data = getSkills().then((res) => {
      setUserSkills({
        workExperience: res.workExperience || "",
        education: res.education || "",
        skills: res.skills || "",
        languages: res.languages || "",
      });
    });
    // return () => data;
  }, [userData.user]);

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
  }, [userData.user]);

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
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/search">
            Find Jobs
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/profile">
            Upload CV
          </Link>
        </li>
        {!userData.user ? (
          <>
            <li className="nav-li">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-li">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-li">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-li">
              <span className="logout" onClick={handleLogout}>
                Logout
              </span>
            </li>
          </>
        )}
      </ul>
      <div>
        <Outlet />
      </div>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          userPreferences,
          setUserPreferences,
          userSkills,
          setUserSkills,
        }}
      >
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/search" element={<ResultsPage />} />
          <Route path="/search/result/:id" element={<JobPage />} />
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
