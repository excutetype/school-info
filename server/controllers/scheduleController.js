const Schedule = require("../services/Schedule");
const Date = require("../utils/Date");

module.exports = {
  getSchedule: async (req, res, next) => {
    try {
      const { province, code } = req.query;
      let { fromDate, toDate } = req.query;
      if (!fromDate) {
        fromDate = Date.getCurrentDate("YYYYMMDD");
      }
      if (!toDate) {
        toDate = Date.getCurrentDate("YYYYMMDD");
      } else {
        toDate = Date.getNextDate(toDate, "YYYYMMDD");
      }
      const schedule = await Schedule.build(province, code, fromDate, toDate);
      const response = await schedule.getSchedule();
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};
