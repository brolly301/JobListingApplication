const express = require("express");
const router = express.Router();

const {
  editUser,
  editPreferences,
  addPreferences,
} = require("../controllers/profile");

router.patch("/editUser", editUser);

router.post("/addPreferences", addPreferences);

router.patch("/editPreferences", editPreferences);

module.exports = router;
