const express = require("express");
const router = express.Router();

//Controller imports
const { register } = require("../controllers/user");

//API routes
router.post("/register", register);

module.exports = router;
