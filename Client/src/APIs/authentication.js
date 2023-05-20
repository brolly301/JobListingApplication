export const register = async ({
  username,
  email,
  firstName,
  lastName,
  password,
} = {}) => {
  const user = { username, email, firstName, lastName, password };

  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {}
};

export const login = async ({ username, password } = {}) => {
  const user = { username, password };

  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    throw new Error("Cannot login right now");
  }
};
