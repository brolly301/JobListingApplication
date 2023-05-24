import "../../CSS/ProfilePage/UserPreferences.css";

export default function UserPreferences({ onEdit }) {
  const handleEdit = () => {
    onEdit();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>User Preferences</h1>
      <div className="input-container">
        <input className="input-box" type="text" placeholder="Salary" />
        <input className="input-box" type="text" placeholder="Location" />
        <input className="input-box" type="text" placeholder="Job Title" />
        <input className="input-box" type="text" placeholder="Job Type" />
        <input className="input-box" type="text" placeholder="Remote" />
        <button className="input-box" type="submit">
          Save
        </button>
        <button type="button" onClick={handleEdit} className="input-box">
          Cancel
        </button>
      </div>
    </div>
  );
}
