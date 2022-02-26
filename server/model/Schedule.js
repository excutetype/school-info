const axios = require("axios");
const { getCurrentDate } = require("../custom_module");

const Schedule = {
  getSchedule: async (province, code, _level) => {
    const baseUrl = process.env[`NEIS_API_SCHEDULE_${_level}_URL`];
    const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&ALL_TI_YMD=${getCurrentDate()}&GRADE=${2}&CLASS_NM=${2}`;
    const fetchUrl = encodeURI(baseUrl + paramsUrl);
    let schedule = (await axios.get(fetchUrl)).data;
    if (schedule[`${_level}Timetable`]) {
      schedule = schedule[`${_level}Timetable`][1].row;
      schedule = schedule.map((period) => {
        return {
          period: period.PERIO,
          subject: period.ITRT_CNTNT.replace(/[-]/g, ""),
        };
      });
      return { success: true, data: schedule };
    } else {
      return { success: false };
    }
  },
};

module.exports = Schedule;
