const express = require("express");
const router = express.Router();

const { editUser, editPreferences } = require("../controllers/profile");

router.patch("/editUser", editUser);

router.post("/editPreferences", editPreferences);

module.exports = router;
