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

module.exports = { ApiFetchError, DataNotExistError };
