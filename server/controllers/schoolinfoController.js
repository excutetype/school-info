const Schoolinfo = require("../services/Schoolinfo");

module.exports = {
  getSchoolSummaryData: async (req, res, next) => {
    try {
      const { province, name, level } = req.query;
      const schoolinfo = await Schoolinfo.build(province, name, level);
      const response = await schoolinfo.getSchoolSummaryData();
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};
