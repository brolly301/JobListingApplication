import "../../CSS/ProfilePage/UserPersonalDetails.css";

export default function UserDetails() {
  return (
    <div>
      <h1>Profile Page</h1>
      <div className="input-container">
        <input className="input-box" type="text" placeholder="Full name" />
        <input className="input-box" type="text" placeholder="Email" />
        <input className="input-box" type="text" placeholder="Location" />
        <input className="input-box" type="text" placeholder="Phone Number" />
      </div>
    </div>
  );
}
