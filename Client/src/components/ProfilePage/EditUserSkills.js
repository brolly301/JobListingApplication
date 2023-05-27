import { useState } from "react";

export default function UserSkills({ onEdit }) {
  const [formData, setFormData] = useState({
    workExperience: "",
    education: "",
    skills: "",
    languages: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <div>
      <h3>Edit Skills & Qualifications</h3>
      <div className="input-container">
        <form>
          <input
            type="text"
            placeholder="Work Experience"
            name="workExperience"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Education"
            name="education"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Skills"
            name="skills"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Languages"
            name="languages"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Driving License"
            name="drivingLicense"
            onChange={handleChange}
          />
          <button onClick={onEdit}>Edit</button>
        </form>
      </div>
    </div>
  );
}
