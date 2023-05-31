import "../../CSS/ProfilePage/UserPreferences.css";
import { editPreferences } from "../../APIs/profile";
import useUserContext from "../../hooks/useUserContext";

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
  };

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
          <input
            onChange={handleChange}
            className="input-box"
            type="text"
            placeholder="Remote"
            name="remote"
          />
          <button className="input-box" type="submit">
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
