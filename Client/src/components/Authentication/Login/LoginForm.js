import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "../../../CSS/LoginPage/LoginPage.css";
import { login } from "../../../APIs/authentication";
import useUserContext from "../../../hooks/useUserContext";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const redirect = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const { setUserData } = useUserContext();

  const handlePasswordShow = () => setPasswordShow(!passwordShow);

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      if (res.error) {
        alert(res.error);
      } else {
        alert(res.message);
        setUserData({ user: res.username });
        redirect("/");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h1 className="login-heading">Login</h1>
      <h4 className="login-subheading">
        Please enter your login details below.
      </h4>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input
            value={formData.username}
            onChange={handleChange}
            id="username"
            className="input-box"
            type="text"
            placeholder="Username"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            id="password"
            className="input-box"
            type={passwordShow ? "text" : "password"}
            placeholder="Password"
          />
          <div className="passwordShow">
            {passwordShow ? (
              <IoMdEye onClick={handlePasswordShow} />
            ) : (
              <IoMdEyeOff onClick={handlePasswordShow} />
            )}
          </div>

          <button className="input-box">Login</button>
        </div>
      </form>
    </div>
  );
}
