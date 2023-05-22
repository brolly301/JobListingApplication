const express = require("express");
const router = express.Router();
const passport = require("passport");

//Controller imports
const {
  register,
  login,
  logout,
  getLoggedInUser,
} = require("../controllers/authentication");
const { isLoggedIn } = require("../middleware/isLoggedIn");
const { getUserByID } = require("../middleware/user");

//API routes
router.post("/register", register);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  login
);

router.get("/logout", logout);

router.get("/user", isLoggedIn, getLoggedInUser);

module.exports = router;
