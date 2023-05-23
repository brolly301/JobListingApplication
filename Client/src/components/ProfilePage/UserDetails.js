import { useContext, useState } from "react";
import UserDetailsContext from "../../context/userDetails";
import EditUserDetails from "./EditUserDetails";
import "../../CSS/ProfilePage/UserPersonalDetails.css";

export default function UserDetails() {
  const { userData } = useContext(UserDetailsContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>Profile Page</h1>
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
    content = <EditUserDetails onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}
