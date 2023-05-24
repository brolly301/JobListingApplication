const User = require("../models/user");
const UserPreferences = require("../models/userPreference");

exports.editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
  res.send(user);
};

exports.editPreferences = async (req, res) => {
  const userExists = await UserPreferences.findOne({ username: req.user._id });

  if (userExists) {
    const updatedUser = await UserPreferences.findOneAndUpdate({
      username: req.user._id,
      ...req.body,
    });
    res.send(updatedUser);
  }
};

exports.addPreferences = async (req, res) => {
  const insertedUser = await UserPreferences.insertMany({
    username: req.user._id,
  });
  res.send(insertedUser);
};
