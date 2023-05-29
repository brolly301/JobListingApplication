const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads/images",
  filename: "myfile",
});

const upload = multer({ storage: storage });

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

router.patch("/editPreferences", editPreferences);

router.get("/preferences", getPreferences);

router.patch("/editSkills", editSkills);

router.get("/skills", getSkills);

router.post("/fileUpload", upload.single("myfile"), (req, res) => {
  console.log(req.file[0]);
});

module.exports = router;
