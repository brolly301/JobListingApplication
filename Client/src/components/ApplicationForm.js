import { useState } from "react";
import "../CSS/ApplicationForm.css";
import useUserContext from "../hooks/useUserContext";

export default function ApplicationForm() {
  const { userData } = useUserContext();

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    location: "",
    education: "",
    currentSalary: "",
    workExperience: " ",
    skills: "",
    personalStatement: "",
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
    <div className="application-container">
      <h1 className="application-title">Application Form</h1>
      <button className="application-fill-button">Fill Profile Details</button>
      <form onSubmit={handleSubmit}>
        <div className="application-form">
          <input
            onChange={handleChange}
            type="text"
            id="firstName"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            type="text"
            id="surname"
            placeholder="Surname"
          />
          <input
            onChange={handleChange}
            type="text"
            id="email"
            placeholder="Email Address"
          />
          <input
            onChange={handleChange}
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
          />
          <input
            onChange={handleChange}
            type="text"
            id="location"
            placeholder="Location"
          />
          <input
            onChange={handleChange}
            type="text"
            id="education"
            placeholder="Highest Level of Education"
          />
          <input
            onChange={handleChange}
            type="text"
            id="currentSalary"
            placeholder="Current Salary"
          />
          <textarea
            onChange={handleChange}
            type="text"
            id="workExperience"
            placeholder="Work Experience"
          />
          <input
            onChange={handleChange}
            type="text"
            id="skills"
            placeholder="Skills"
          />
          <textarea
            onChange={handleChange}
            type="text"
            id="personalStatement"
            placeholder="Personal Statement"
          />
          <button>Submit Application</button>
        </div>
      </form>
    </div>
  );
}
