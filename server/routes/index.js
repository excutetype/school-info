const express = require("express");
const router = express.Router();
const control = require("./control");

router.get("/api/cafeteria", control.getCafeteria);
router.get("/api/schedule", control.getSchedule);

router.post("/api/schoolData", control.setSchoolData);

module.exports = router;
