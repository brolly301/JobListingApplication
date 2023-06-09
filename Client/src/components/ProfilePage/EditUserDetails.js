import { useContext } from "react";
import "../../CSS/ProfilePage/UserPersonalDetails.css";
import useUserContext from "../../hooks/useUserContext";
import { editUser } from "../../APIs/profile";

export default function EditUserDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();

  const handleEdit = () => {
    onEdit();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editUser(userData);
    onEdit();
  };

  //double check this, could be messing things up
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>Profile Page</h1>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="firstName"
            className="input-box"
            type="text"
            placeholder="Full name"
            defaultValue={userData.firstName}
          />
          <input
            onChange={handleChange}
            name="lastName"
            className="input-box"
            type="text"
            placeholder="Full name"
            defaultValue={userData.lastName}
          />
          <input
            onChange={handleChange}
            className="input-box"
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={userData.email}
          />
          <input
            onChange={handleChange}
            className="input-box"
            name="location"
            type="text"
            placeholder="Location"
            defaultValue={userData.location}
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            defaultValue={userData.phoneNumber}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleEdit}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
