// import { getTest } from "./functions/test";
// import { useEffect, useState } from "react";
import HomePage from "./routes/HomePage";
import RegisterPage from "./routes/RegisterPage";
import ResultsPage from "./routes/ResultsPage";
import LoginPage from "./routes/LoginPage";
import "./index.css";
import { Link, Outlet, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "./context/user";
import { getUser, logout } from "./APIs/authentication";

export default function App() {
  const redirect = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getUser()
      .then((res) => {
        if (res.error) return console.log(res.error);
        else setUser(res.username);
      })
      .catch((err) => console.log(err));
    return () => unsubscribe();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    logout().then((message) => {
      console.log(message);
      setUser(null);
      redirect("/");
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
          <li>
            <span onClick={handleLogout}>Logout</span>
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
