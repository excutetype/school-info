const express = require("express");
const router = express.Router();
const control = require("./control");

router.get("/api/schoolData", control.getSchoolData);
router.get("/api/cafeteria", control.getCafeteria);
router.get("/api/schedule", control.getSchedule);

module.exports = router;
