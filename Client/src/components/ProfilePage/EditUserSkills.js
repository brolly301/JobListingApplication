import { useState } from "react";
import { editSkills } from "../../APIs/profile";
import useUserContext from "../../hooks/useUserContext";
import Dropdown from "../Dropdown";

export default function UserSkills({ onEdit }) {
  const { userSkills, setUserSkills } = useUserContext();

  const handleChange = (e) => {
    setUserSkills({ ...userSkills, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editSkills(userSkills);
    onEdit();
  };

  const dropdownChange = (selection) => {
    setUserSkills({ ...userSkills, drivingLicense: selection });
  };

  const drivingLicenseOption = [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
    },
  ];

  return (
    <div>
      <h3>Edit Skills & Qualifications</h3>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Work Experience"
            name="workExperience"
            onChange={handleChange}
            defaultValue={userSkills?.workExperience || ""}
          />
          <input
            type="text"
            placeholder="Education"
            name="education"
            onChange={handleChange}
            defaultValue={userSkills?.education || ""}
          />
          <input
            type="text"
            placeholder="Skills"
            name="skills"
            onChange={handleChange}
            defaultValue={userSkills?.skills || ""}
          />
          <input
            type="text"
            placeholder="Languages"
            name="languages"
            onChange={handleChange}
            defaultValue={userSkills?.languages || ""}
          />
          <Dropdown
            options={drivingLicenseOption}
            onChange={dropdownChange}
            defaultValue={userSkills?.drivingLicense}
            name="remote"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onEdit}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
