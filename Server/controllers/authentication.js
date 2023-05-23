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
  const { username } = req.user;
  if (!User) {
    return res.status(401).json({
      error: "Invalid Login",
    });
  }

  try {
    res.json({
      message: "Successful Login",
      username,
    });
  } catch (err) {
    res.send(err);
  }
};

exports.logout = async (req, res) => {
  req.logout(function (err) {
    if (err) {
    } else {
      return res.json({
        message: "Logout Successful",
      });
    }
  });
};

exports.getLoggedInUser = (req, res) => {
  return res.status(200).json({
    message: "User is still logged in",
    ...req.user,
  });
};

exports.editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
  res.send(user);
};
