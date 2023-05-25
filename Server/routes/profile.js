const express = require("express");
const router = express.Router();

const {
  editUser,
  editPreferences,
  addPreferences,
  getPreferences,
} = require("../controllers/profile");

router.patch("/editUser", editUser);

router.post("/addPreferences", addPreferences);

router.patch("/editPreferences", editPreferences);

router.get("/preferences", getPreferences);

module.exports = router;
