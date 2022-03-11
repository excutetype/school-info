const Timetable = require("../services/Timetable");
const Date = require("../utils/Date");

module.exports = {
  getTimetable: async (req, res, next) => {
    try {
      const { province, code, level, grade, classNM } = req.query;
      let { date } = req.query;
      if (!date) {
        date = Date.getCurrentDate("YYYYMMDD");
      }
      const timetable = await Timetable.build(
        province,
        code,
        level,
        grade,
        classNM,
        date
      );
      const response = await timetable.getTimetable();
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};
