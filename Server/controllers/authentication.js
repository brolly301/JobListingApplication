const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    const registerUser = await User.register(newUser, req.body.password);
    res.send(registerUser);
    req.login(registerUser, (err) => {
      if (err) return next(err);
    });
  } catch (err) {
    res.send(err).json();
  }
};

exports.login = async (req, res) => {
  if (!User) {
    return res.status(401).json({
      error: "Invalid Login",
    });
  }

  try {
    res.json({
      message: "Successful Login",
    });
  } catch (err) {
    res.send(err);
  }
};

exports.getLoggedInUser = (req, res) => {
  const { username } = req.user;
  return res.status(200).json({
    message: "User is still logged in",
    username,
  });
};

exports.logout = async (req, res) => {
  req.logout(function (err) {
    if (err) {
      return err;
    } else {
      res.send("Logged Out");
    }
  });
};
