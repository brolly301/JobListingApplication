import { useContext } from "react";
import "../../CSS/ProfilePage/UserPersonalDetails.css";
import UserDetailsContext from "../../context/userDetails";

export default function EditUserDetails({ onEdit }) {
  const { userData } = useContext(UserDetailsContext);

  const handleEdit = () => {
    onEdit();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>Profile Page</h1>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Full name"
          defaultValue={`${userData.firstName} ${userData.lastName}`}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Email"
          defaultValue={userData.email}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Location"
          defaultValue={userData.location}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Phone Number"
          defaultValue={userData.phoneNumber}
        />
        <button>Save</button>
        <button onClick={handleEdit}>Cancel</button>
      </div>
    </div>
  );
}
