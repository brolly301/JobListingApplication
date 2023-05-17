import "../../../CSS/RegisterPage/RegisterForm.css";

export default function RegisterForm() {
  return (
    <div className="register-main-container">
      <div className="register-form-container">
        <br />
        <br />
        <h2 className="title">Create your new account</h2>
        <h5 className="subTitle">
          Please enter your details below and get applying!
        </h5>
        <div className="input-container">
          <div className="input-row">
            <input
              className="input-box-row"
              type="text"
              placeholder="First Name"
            />
            <input
              className="input-box-row"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="input-column">
            <input
              className="input-box-column"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="input-box-column"
              type="password"
              placeholder="Password"
            />
            <input
              className="input-box-column"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="register-button">Register</button>
            <button className="login-button">
              Already have an account? Log in.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
