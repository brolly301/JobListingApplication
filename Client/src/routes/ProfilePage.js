import EditUserDetails from "../components/ProfilePage/EditUserDetails";
import UserDetails from "../components/ProfilePage/UserDetails";
import UserPreferences from "../components/ProfilePage/UserPreferences";

export default function ProfilePage() {
  return (
    <div>
      <UserDetails />
      <UserPreferences />
    </div>
  );
}
