module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({
      error: "Unauthorized.",
    });
  }
  next();
};
