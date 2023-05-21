const User = require("../models/user");

module.exports.getUserByID = async (req, res, next) => {
  const user = await User.findById(req._id);
  req.user = user;
  next();
};
