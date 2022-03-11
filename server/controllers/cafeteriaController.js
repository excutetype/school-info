const Cafeteria = require("../services/Cafeteria");
const Date = require("../utils/Date");

module.exports = {
  getCafeteria: async (req, res, next) => {
    try {
      const { province, code } = req.query;
      let { date } = req.query;
      if (!date) {
        date = Date.getCurrentDate("YYYYMMDD");
      }
      const cafeteria = await Cafeteria.build(province, code, date);
      const response = await cafeteria.getCafeteria();
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};
