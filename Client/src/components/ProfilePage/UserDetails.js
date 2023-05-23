import { useContext } from "react";
import "../../CSS/ProfilePage/UserPersonalDetails.css";
import UserDetailsContext from "../../context/userDetails";

export default function UserDetails() {
  const { userData } = useContext(UserDetailsContext);

  return (
    <div>
      <h1>Profile Page</h1>
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
      </div>
    </div>
  );
}
