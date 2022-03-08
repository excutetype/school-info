function getCurrentDate() {
  const date = new Date();
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();
  let day = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();
  return year + month + day;
}

function getNextYearDate() {
  const date = new Date();
  let year = (date.getFullYear() + 1).toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();
  let day = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();
  return year + month + day;
}

function currentDateToFormatDate(currentDate) {
  20220301;
  const year = currentDate.substring(0, 4) + "년";
  const month = currentDate.substring(4, 6) + "월";
  const day = currentDate.substring(6, 8) + "일";
  return year + month + day;
}

module.exports = {
  getCurrentDate,
  getNextYearDate,
  currentDateToFormatDate,
};
