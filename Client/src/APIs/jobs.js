export const getResults = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/search/:id`,
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
