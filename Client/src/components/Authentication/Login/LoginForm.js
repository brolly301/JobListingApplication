import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "../../../CSS/LoginPage/LoginPage.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () => setPasswordShow(!passwordShow);

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <h4>Please enter your login details below.</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="input-box"
            type="text"
            placeholder="Email Address"
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
