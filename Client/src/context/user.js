import { createContext, useState, useEffect } from "react";
import { getUser } from "../APIs/authentication";
import { getPreferences, getSkills } from "../APIs/profile";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({
    user: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [userPreferences, setUserPreferences] = useState({
    salary: "",
    location: "",
    jobTitle: "",
    jobType: "",
    remote: "",
  });

  const [userSkills, setUserSkills] = useState({
    workExperience: "",
    education: "",
    skills: "",
    languages: "",
    drivingLicense: "",
  });

  useEffect(() => {
    const userData = getUser()
      .then((res) => {
        if (res.error) return console.log(res.error);
        else
          setUserData({
            user: res.username,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            phoneNumber: res.phoneNumber,
            location: res.location,
          });
      })
      .catch((err) => console.log(err));
  }, [userData.user]);

  useEffect(() => {
    const data = getSkills().then((res) => {
      setUserSkills({
        workExperience: res.workExperience || "",
        education: res.education || "",
        skills: res.skills || "",
        languages: res.languages || "",
      });
    });
    // return () => data;
  }, [userData.user]);

  useEffect(() => {
    const data = getPreferences().then((res) => {
      setUserPreferences({
        salary: res.salary || "",
        location: res.location || "",
        jobTitle: res.jobTitle || "",
        jobType: res.jobType || "",
      });
    });
    // return () => data;
  }, [userData.user]);

  const valuesToShare = {
    userData,
    setUserData,
    userPreferences,
    setUserPreferences,
    userSkills,
    setUserSkills,
  };

  return (
    <UserContext.Provider value={valuesToShare}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
