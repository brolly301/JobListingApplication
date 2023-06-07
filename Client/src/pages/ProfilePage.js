import EditUserDetails from "../components/ProfilePage/EditUserDetails";
import UserDetails from "../components/ProfilePage/UserDetails";
import UserPreferences from "../components/ProfilePage/UserPreferences";
import UploadCV from "../components/ProfilePage/UploadCV";
import UserSkills from "../components/ProfilePage/UserSkills";
import "../CSS/ProfilePage/ProfilePage.css";

export default function ProfilePage() {
  return (
    <div className="profile-main">
      <div className="profile-container">
        <UserDetails />
        <UserSkills />
      </div>
      <div className="profile-container">
        <UploadCV />
        <UserPreferences />
      </div>
    </div>
  );
}
