const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");

router.post("/api/schoolData", ctrl.process.setSchoolData);

module.exports = router;
