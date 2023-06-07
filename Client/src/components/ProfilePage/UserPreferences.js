import "../../CSS/ProfilePage/UserPreferences.css";
import { useState, useContext } from "react";
import EditUserPreferences from "./EditUserPreferences";
import useUserContext from "../../hooks/useUserContext";

export default function UserPreferences() {
  const { userPreferences } = useUserContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="container">
      <h2>Preferences</h2>
      <div className="input-container">
        <label>Salary:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences?.salary || "Enter your desired salary"}
        />
        <br />
        <label>Location:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences?.location || "Enter a location"}
        />
        <br />
        <label>Job Title:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences?.jobTitle || "Enter a job title"}
        />
        <br />
        <label>Job Type:</label>
        <input
          className="input-box"
          readOnly
          placeholder={userPreferences?.jobType || "Enter a job type"}
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
