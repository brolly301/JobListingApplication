import "../../CSS/ProfilePage/UserPreferences.css";
import { useState, useContext } from "react";
import UserDetailsContext from "../../context/userDetails";
import EditUserPreferences from "./EditUserPreferences";
import { getPreferences } from "../../APIs/profile";

export default function UserPreferences() {
  const { userPreferences } = useContext(UserDetailsContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "10px" }}>User Preferences</h1>
      <div className="input-container">
        <label>Salary:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences.salary || "Enter your desired salary"}
        />
        <br />
        <label>Location:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences.location || "Enter a location"}
        />
        <br />
        <label>Job Title:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences.jobTitle || "Enter a job title"}
        />
        <br />
        <label>Job Type:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences.jobType || "Enter a job type"}
        />
        <br />
        <label>Remote:</label>
        <input
          className="input-box"
          readOnly
          placeholder="Select a remote option"
        />
        <br />
        <button className="input-box" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditUserPreferences onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}
