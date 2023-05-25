import { useState } from "react";
import "../../CSS/ProfilePage/UserPreferences.css";

export default function UserPreferences({ onEdit }) {
  const [updatedData, setUpdatedData] = useState();

  const handleEdit = () => {
    onEdit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    console.log(updatedData);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>User Preferences</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Salary"
            name="salary"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Location"
            name="location"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Job Title"
            name="jobTitle"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Job Type"
            name="jobType"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Remote"
            name="remote"
          />
          <button className="input-box" type="submit">
            Save
          </button>
          <button type="button" onClick={handleEdit} className="input-box">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
