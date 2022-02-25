const schoolData = require("../model/SchoolData");

const process = {
  setSchoolData: async (req, res) => {
    const { province, name, level } = req.body;
    const response = await schoolData.getSchoolData(province, name, level);
    res.send(response);
  },
};

module.exports = {
  process,
};
