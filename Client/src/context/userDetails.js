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
        firstName: res._doc.firstName,
        lastName: res._doc.lastName,
        email: res._doc.email,
        phoneNumber: res._doc.phoneNumber,
        location: res._doc.location,
      });
    });
    return () => data;
  }, []);

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
