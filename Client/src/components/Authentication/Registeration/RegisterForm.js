import { useState } from "react";
import "../../../CSS/RegisterPage/RegisterForm.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-main-container">
      <div className="register-form-container">
        <br />
        <br />
        <h2 className="title">Create your new account</h2>
        <h5 className="subTitle">
          Please enter your details below and get applying!
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="input-row">
              <input
                className="input-box-row"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                type="text"
                placeholder="First Name"
              />
              <input
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                className="input-box-row"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="input-column">
              <input
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="input-box-column"
                type="text"
                placeholder="Email Address"
              />

              <input
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="input-box-column"
                type="password"
                placeholder="Password"
              />
              <input
                value={formData.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                className="input-box-column"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="register-button">
                Register
              </button>
              <button type="button" className="login-button">
                Already have an account? Log in.
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
