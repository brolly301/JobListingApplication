import "../../CSS/ProfilePage/UserPreferences.css";
import { editPreferences } from "../../APIs/profile";
import useUserContext from "../../hooks/useUserContext";
import Dropdown from "../Dropdown";

export default function UserPreferences({ onEdit }) {
  const { userPreferences, setUserPreferences } = useUserContext();

  const handleEdit = () => {
    onEdit();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editPreferences(userPreferences);
    onEdit();
  };
  const handleChange = (e) => {
    setUserPreferences({ ...userPreferences, [e.target.name]: e.target.value });
    console.log(userPreferences);
  };

  const dropdownChange = (selection) => {
    setUserPreferences({ ...userPreferences, remote: selection });
    console.log(userPreferences.remote);
  };

  const remoteOptions = [
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "Office",
      value: "office",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>User Preferences</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            defaultValue={userPreferences?.salary || ""}
            name="salary"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Location"
            defaultValue={userPreferences?.location}
            name="location"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            defaultValue={userPreferences?.jobTitle}
            name="jobTitle"
          />
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            defaultValue={userPreferences?.jobType}
            name="jobType"
          />
          <Dropdown
            options={remoteOptions}
            onChange={dropdownChange}
            defaultValue={userPreferences?.remote}
            name="remote"
          />
          {/* <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Remote"
            name="remote"
          /> */}
          <button className="edit-preferences-button" type="submit">
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
