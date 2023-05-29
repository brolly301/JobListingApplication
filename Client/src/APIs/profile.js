export const editUser = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  location,
} = {}) => {
  const updatedUser = { firstName, lastName, email, phoneNumber, location };
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/profile/editUser`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};

export const editPreferences = async ({
  salary,
  location,
  jobTitle,
  jobType,
} = {}) => {
  const updatedUser = { salary, location, jobTitle, jobType };
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/profile/editPreferences`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};

export const getPreferences = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/profile/preferences`,
      {
        credentials: "include",
        method: "GET",
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};

export const editSkills = async ({
  workExperience,
  education,
  skills,
  languages,
} = {}) => {
  const updatedUser = { workExperience, education, skills, languages };
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/profile/editSkills`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};

export const getSkills = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/profile/skills`,
      {
        credentials: "include",
        method: "GET",
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};
