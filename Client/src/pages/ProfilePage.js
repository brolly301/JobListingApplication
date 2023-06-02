import EditUserDetails from "../components/ProfilePage/EditUserDetails";
import UserDetails from "../components/ProfilePage/UserDetails";
import UserPreferences from "../components/ProfilePage/UserPreferences";
import UploadCV from "../components/ProfilePage/UploadCV";
import UserSkills from "../components/ProfilePage/UserSkills";

export default function ProfilePage() {
  return (
    <div>
      <UserDetails />
      <UserPreferences />
      <UploadCV />
      <UserSkills />
    </div>
  );
}
