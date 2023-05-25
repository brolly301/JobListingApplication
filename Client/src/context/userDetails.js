import { createContext, useEffect, useState } from "react";
import { getUser2 } from "../APIs/authentication";
import { getPreferences } from "../APIs/profile";

const UserDetailsContext = createContext();

export function UserDetailsProvider({ children }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  //needs fetched and updated
  const [userPreferences, setUserPreferences] = useState({
    salary: "",
    location: "",
    jobTitle: "",
    jobType: "",
  });

  //Works on refresh only, this definitely to do with the login. Edit works perfectly but this setting of the user data needs to re-render
  //once another user logins in, without having to refresh
  //Also doesn't work after registered, only logged in
  useEffect(() => {
    const data = getUser2().then((res) => {
      setUserData({
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        phoneNumber: res.phoneNumber,
        location: res.location,
      });
    });
    return () => data;
  }, []);

  useEffect(() => {
    const data = getPreferences().then((res) => {
      setUserPreferences({
        salary: res.salary || "",
        location: res.location,
        jobTitle: res.jobTitle || "",
        jobType: res.jobType || "",
      });
    });
    return () => data;
  }, []);

  const valueToShare = {
    userData,
    setUserData,
    userPreferences,
    setUserPreferences,
  };

  return (
    <UserDetailsContext.Provider value={valueToShare}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export default UserDetailsContext;
