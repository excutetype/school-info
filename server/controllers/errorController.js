const {
  ApiFetchError,
  DataNotExistError,
  LackParamsError,
} = require("../errors/service");

module.exports = {
  errorHandler: (err, req, res, next) => {
    if (err instanceof ApiFetchError) {
      res.status(500).send(err.message);
    } else if (err instanceof DataNotExistError) {
      res.status(404).send(err.message);
    } else if (err instanceof LackParamsError) {
      res.status(404).send(err.message);
    }
  },
};
