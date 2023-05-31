import "../CSS/Navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../APIs/authentication";
import useUserContext from "../hooks/useUserContext";

export default function Navbar() {
  const route = useNavigate();
  const { userData, setUserData } = useUserContext();

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
    <div>
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
              <Link className="nav-link" to="/jobs">
                Saved
              </Link>
            </li>
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
    </div>
  );
}
