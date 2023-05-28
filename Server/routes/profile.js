const express = require("express");
const router = express.Router();
const fileUploader = require("express-fileupload");

const {
  editUser,
  editPreferences,
  addPreferences,
  getPreferences,
  fileUpload,
  getSkills,
  editSkills,
  addSkills,
} = require("../controllers/profile");

router.patch("/editUser", editUser);

router.post("/addPreferences", addPreferences);

router.patch("/editPreferences", editPreferences);

router.get("/preferences", getPreferences);

router.post("/addSkills", addSkills);

router.patch("/editSkills", editSkills);

router.get("/skills", getSkills);

router.post("/fileUpload", fileUpload);

module.exports = router;
