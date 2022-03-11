class ApiFetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "ApiFetchError";
  }
}

class DataNotExistError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataNotExistError";
  }
}

class LackParamsError extends Error {
  constructor(message) {
    super(message);
    this.name = "lackParamsError";
  }
}

module.exports = { ApiFetchError, DataNotExistError, LackParamsError };
