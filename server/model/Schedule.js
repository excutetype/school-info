const axios = require("axios");
const {
  currentDateToFormatDate,
  getCurrentDate,
  getNextYearDate,
} = require("../custom_module");

const Schedule = {
  getSchedule: async (province, code) => {
    const baseUrl = `https://open.neis.go.kr/hub/SchoolSchedule?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
    const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&AA_FROM_YMD=${getCurrentDate()}&AA_TO_YMD=${getNextYearDate()}`;
    const fetchUrl = encodeURI(baseUrl + paramsUrl);
    let schedule = (await axios.get(fetchUrl)).data;
    if (schedule.SchoolSchedule) {
      schedule = schedule.SchoolSchedule[1].row
        .filter((event) => {
          if (
            event.SBTR_DD_SC_NM === "공휴일" ||
            event.SBTR_DD_SC_NM === "휴업일"
          ) {
            return false;
          }
          return true;
        })
        .map((event) => {
          let result = {
            title: event.EVENT_NM,
            date: currentDateToFormatDate(event.AA_YMD),
            grade: [],
          };
          const gradeTable = {
            ONE: "1",
            TW: "2",
            THREE: "3",
            FR: "4",
            FIV: "5",
            SIX: "6",
          };
          for (let grade in gradeTable) {
            if (event[`${grade}_GRADE_EVENT_YN`] === "Y") {
              result.grade.push(gradeTable[grade]);
            }
          }
          return result;
        });
      return { success: true, data: schedule };
    } else if (schedule.RESULT.CODE === "INFO-200") {
      return { success: true, data: null };
    } else {
      return { success: false, data: null };
    }
  },
};

module.exports = Schedule;
