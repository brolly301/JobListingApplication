import { createContext, useEffect, useState, useContext } from "react";
import { getUser2 } from "../APIs/authentication";

const UserDetailsContext = createContext();

export function UserDetailsProvider({ children }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  //Works on refresh only
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
