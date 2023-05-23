export const register = async ({
  username,
  email,
  firstName,
  lastName,
  location,
  phoneNumber,
  password,
} = {}) => {
  const user = {
    username,
    email,
    firstName,
    lastName,
    location,
    phoneNumber,
    password,
  };

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

export const logout = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/logout`, {
      method: "GET",
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
      method: "GET",
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    throw new Error("Please login to continue");
  }
};

export const editUser = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  location,
} = {}) => {
  const updatedUser = { firstName, lastName, email, phoneNumber, location };
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/editUser`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    return await response.json();
  } catch (err) {
    throw new Error("Please login to continue");
  }
};
