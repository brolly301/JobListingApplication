import "../../../CSS/RegisterPage/RegisterForm.css";

export default function RegisterForm() {
  return (
    <div className="register-main-container">
      <div className="register-form-container">
        <h2>Create your new account</h2>
        <h5>Please enter your details below and get applying!</h5>
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
              type="text"
              placeholder="Password"
            />
            <input
              className="input-box-column"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="register-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
