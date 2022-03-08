const express = require("express");
const router = express.Router();

const schoolinfoController = require("../controllers/schoolinfoController");
const cafeteriaController = require("../controllers/cafeteriaController");
const timetableController = require("../controllers/timetableController");
const scheduleController = require("../controllers/scheduleController");
const errorController = require("../controllers/errorController");
const pageController = require("../controllers/pageController");

router.get("/api/schoolSummary", schoolinfoController.getSchoolSummaryData);
router.get("/api/cafeteria", cafeteriaController.getCafeteria);
router.get("/api/timetable", timetableController.getTimetable);
router.get("/api/schedule", scheduleController.getSchedule);
router.use(errorController.errorHandler);
router.get("*", pageController.showPage);

module.exports = router;
