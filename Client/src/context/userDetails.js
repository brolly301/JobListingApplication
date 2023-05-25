import { createContext, useEffect, useState } from "react";
import { getUser } from "../APIs/authentication";

const UserDetailsContext = createContext();

export function UserDetailsProvider({ children }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  useEffect(() => {
    const data = getUser().then((res) => {
      setUserData({
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        phoneNumber: res.phoneNumber,
        location: res.location,
      });
      console.log(res);
    });
    return () => data;
  }, [setUserData]);

  const valueToShare = {
    userData,
    setUserData,
  };

  return (
    <UserDetailsContext.Provider value={valueToShare}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export default UserDetailsContext;
