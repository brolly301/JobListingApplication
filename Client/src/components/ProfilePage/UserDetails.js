import { useContext, useState } from "react";
import UserContext from "../../context/user";
import EditUserDetails from "./EditUserDetails";
import "../../CSS/ProfilePage/UserPersonalDetails.css";

export default function UserDetails() {
  const { userData } = useContext(UserContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="details-container">
      <h2>Personal Details</h2>
      <div className="details-input-container">
        <label>Name:</label>
        <input
          type="text"
          readOnly
          placeholder={`${userData.firstName} ${userData.lastName}`}
        />
        <label>Email:</label>
        <input type="text" readOnly placeholder={userData.email} />
        <label>Location:</label>
        <input type="text" readOnly placeholder={userData.location} />
        <label>Phone Number:</label>
        <input type="text" readOnly placeholder={userData.phoneNumber} />
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditUserDetails onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}

{
  /* <h3>
          {userData.firstName} {userData.lastName}
        </h3>
        <h3>{userData.email}</h3>
        <h3>{userData.location}</h3>
        <h3>{userData.phoneNumber}</h3> */
}
