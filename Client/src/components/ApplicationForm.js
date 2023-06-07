import { useState } from "react";
import "../CSS/ApplicationForm.css";
import useUserContext from "../hooks/useUserContext";
import { submitApplication } from "../APIs/jobs";
import useSavedJobsContext from "../hooks/useSavedJobsContext";
import { useLocation } from "react-router-dom";

export default function ApplicationForm() {
  const { userData } = useUserContext();
  const { setApplications, updateJobs } = useSavedJobsContext();
  const location = useLocation();
  const result = location.state.result;

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitApplication({
      adRef: result.adref,
      title: result.title,
      company: result.company.display_name,
      salary: result.salary_max,
      location: result.location.display_name,
      category: result.category.label.replace("Jobs", ""),
      contractTime: capitalise(result.contract_time.replace("_", " ")),
      contractType: capitalise(result.contract_type),
      link: result.redirect_url,
    });
    updateJobs(setApplications, res);
    alert("Application Submitted");
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
