const express = require("express");
const { getResults } = require("../controllers/jobs");
const router = express.Router();

router.get("/result", getResults);

module.exports = router;
