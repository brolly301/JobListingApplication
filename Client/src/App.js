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
import { useEffect, useState } from "react";
import { UserContext } from "./context/user";
import { getUser, logout } from "./APIs/authentication";
import ProfilePage from "./routes/ProfilePage";

export default function App() {
  const route = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getUser()
      .then((res) => {
        if (res.error) return console.log(res.error);
        else setUser(res._doc.username);
      })
      .catch((err) => console.log(err));
    return () => unsubscribe();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    logout().then((message) => {
      console.log(message);
      setUser(null);
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
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/search" element={<ResultsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <RegisterPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <LoginPage />}
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
