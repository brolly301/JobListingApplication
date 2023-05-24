import "../../CSS/ProfilePage/UserPreferences.css";
import { useState, useContext } from "react";
import UserDetailsContext from "../../context/userDetails";
import EditUserPreferences from "./EditUserPreferences";

export default function UserPreferences() {
  const { userData } = useContext(UserDetailsContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "10px" }}>User Preferences</h1>
      <div className="input-container">
        <label>Salary:</label>
        <input className="input-box" readOnly placeholder="" />
        <br />
        <label>Location:</label>
        <input className="input-box" readOnly placeholder="" />
        <br />
        <label>Job Title:</label>
        <input className="input-box" readOnly placeholder="" />
        <br />
        <label>Job Type:</label>
        <input className="input-box" readOnly placeholder="" />
        <br />
        <label>Remote:</label>
        <input className="input-box" readOnly placeholder="" />
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
