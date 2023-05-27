const express = require("express");
const router = express.Router();
const fileUploader = require("express-fileupload");

const {
  editUser,
  editPreferences,
  addPreferences,
  getPreferences,
  fileUpload,
} = require("../controllers/profile");

router.patch("/editUser", editUser);

router.post("/addPreferences", addPreferences);

router.patch("/editPreferences", editPreferences);

router.get("/preferences", getPreferences);

router.post("/fileUpload", fileUpload);

module.exports = router;
