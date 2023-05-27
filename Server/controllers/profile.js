const User = require("../models/user");
const UserPreferences = require("../models/userPreference");

exports.editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
  res.send(user);
};

exports.editPreferences = async (req, res) => {
  // const userExists = await UserPreferences.findOneAndUpdate({
  //   username: req.body.username,
  //   ...req.body,
  // });
  // res.send(userExists);

  const update = await UserPreferences.findOne({ username: req.user.username });

  const updatedUser = await UserPreferences.findByIdAndUpdate(update._id, {
    ...req.body,
  });
  res.send(updatedUser);
};

exports.addPreferences = async (req, res) => {
  const insertedUser = await UserPreferences.insertMany({
    username: req.body.username,
  });
  res.send(insertedUser);
};

//This works almost fully but the request is still sent when its null, so need to sort this
exports.getPreferences = async (req, res) => {
  if (!req.user) {
    const preferences = await UserPreferences.findOne({
      username: req.user.username,
    });
    res.send(preferences);
  }
};

// exports.getLoggedInUser = (req, res) => {
//   return res.status(200).json({
//     message: "User is still logged in",
//     firstName: req.user.firstName,
//     lastName: req.user.lastName,
//     email: req.user.email,
//     location: req.user.location,
//     phoneNumber: req.user.phoneNumber,
//     username: req.user.username,
//   });
// };
