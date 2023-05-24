import "../../CSS/ProfilePage/UserPreferences.css";
import { useState, useContext } from "react";
import UserDetailsContext from "../../context/userDetails";
import EditUserPreferences from "./EditUserPreferences";

export default function UserPreferences() {
  const { userData, handleEdit, showEdit } = useContext(UserDetailsContext);

  let content = (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "10px" }}>User Preferences</h1>
      <div className="input-container">
        <h3>
          {userData.firstName} {userData.lastName}
        </h3>
        <h3>{userData.email}</h3>
        <h3>{userData.location}</h3>
        <h3>{userData.phoneNumber}</h3>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditUserPreferences />;
  }

  return <div>{content}</div>;
}
