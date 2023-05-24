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
