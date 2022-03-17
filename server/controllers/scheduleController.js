const Schedule = require("../services/Schedule");

module.exports = {
  getSchedule: async (req, res, next) => {
    try {
      const { province, code, fromDate, toDate } = req.query;
      const schedule = await Schedule.build(province, code, fromDate, toDate);
      const response = await schedule.getSchedule();
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};
