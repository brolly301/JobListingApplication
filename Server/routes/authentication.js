const express = require("express");
const router = express.Router();
const passport = require("passport");

//Controller imports
const { register, login, logout } = require("../controllers/authentication");

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

module.exports = router;
