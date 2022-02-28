const schoolData = require("../model/SchoolData");
const cafeteria = require("../model/Cafeteria");
const schedule = require("../model/Schedule");

const process = {
  showPage: (req, res) => {
    res.send("hello!");
  },
  getSchoolData: async (req, res) => {
    const { province, name, level } = req.query;
    const response = await schoolData.getSchoolData(province, name, level);
    res.send(response);
  },
  getCafeteria: async (req, res) => {
    const { province, code } = req.query;
    const response = await cafeteria.getCafeteria(province, code);
    res.send(response);
  },
  getSchedule: async (req, res) => {
    const { province, code, level, grade, classNM } = req.query;
    const response = await schedule.getSchedule(
      province,
      code,
      level,
      grade,
      classNM
    );
    res.send(response);
  },
};

module.exports = process;
