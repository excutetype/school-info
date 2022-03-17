import dayjs from "dayjs";

class Date {
  static getCurrentDate(format) {
    const date = dayjs();
    const result = date.format(format);
    return result;
  }

  static getCurrentDayOfTheWeek() {
    const date = dayjs();
    const dayOfTheWeek = date.get("d");
    const table = ["일", "월", "화", "수", "목", "금", "토"];
    const result = table[dayOfTheWeek];
    return result;
  }

  static getNextDate(range, format) {
    let date = dayjs();
    date = date.add(1, range);
    const result = date.format(format);
    return result;
  }

  static convertFormat(originalDate, format) {
    const date = dayjs(originalDate);
    const result = date.format(format);
    return result;
  }
}

export default Date;
