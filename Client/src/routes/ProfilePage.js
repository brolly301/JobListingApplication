import EditUserDetails from "../components/ProfilePage/EditUserDetails";
import UserDetails from "../components/ProfilePage/UserDetails";
import UserPreferences from "../components/ProfilePage/UserPreferences";
import UploadCV from "../components/ProfilePage/UploadCV";

export default function ProfilePage() {
  return (
    <div>
      <UserDetails />
      <UserPreferences />
      <UploadCV />
    </div>
  );
}
