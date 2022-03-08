const Cafeteria = require("../services/Cafeteria");

module.exports = {
  getCafeteria: async (req, res, next) => {
    try {
      const { province, code } = req.query;
      const cafeteria = await Cafeteria.build(province, code);
      const response = await cafeteria.getCafeteria();
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};
