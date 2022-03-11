const dayjs = require("dayjs");

class Date {
  static getCurrentDate(format) {
    const date = dayjs();
    const result = date.format(format);
    return result;
  }

  static getNextDate(range, format) {
    let date = dayjs();
    date = date.add(1, range);
    const result = date.format(format);
    return result;
  }
}

module.exports = Date;
