const User = require("../models/user");
const multer = require("multer");
const UserPreferences = require("../models/userPreference");
const UserSkills = require("../models/userSkills");
const File = require("../models/file");
const fileUpload = require("express-fileupload");

exports.editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
  res.send(user);
};

exports.editPreferences = async (req, res) => {
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

exports.getPreferences = async (req, res) => {
  if (req.user) {
    const preferences = await UserPreferences.findOne({
      username: req.user.username,
    });
    res.send(preferences);
  } else {
    return res.status(404).json();
  }
};

exports.editSkills = async (req, res) => {
  const update = await UserSkills.findOne({ username: req.user.username });

  const updatedUser = await UserSkills.findByIdAndUpdate(update._id, {
    ...req.body,
  });
  res.send(updatedUser);
};

exports.addSkills = async (req, res) => {
  const insertedUser = await UserSkills.insertMany({
    username: req.body.username,
  });
  res.send(insertedUser);
};

exports.getSkills = async (req, res) => {
  if (req.user) {
    const skills = await UserSkills.findOne({
      username: req.user.username,
    });
    res.send(skills);
  } else {
    return res.status(404).json();
  }
};

exports.fileUpload = async (res, req) => {
  console.log(req.files);
  // const filename = "newfile";
  // const file = req.files[0].name;
  // let uploadPath = __dirname + "/uploads/" + filename;
  // file.mv(uploadPath, (err) => {
  //   if (err) {
  //     return res.send(err);
  //   }
  // });
  // res.send(200);
};
