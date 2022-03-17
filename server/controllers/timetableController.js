const Timetable = require("../services/Timetable");

module.exports = {
  getTimetable: async (req, res, next) => {
    try {
      const { province, code, level, grade, classNM, date } = req.query;
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
