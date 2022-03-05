const axios = require("axios");
const { getCurrentDate } = require("../custom_module");

const Timetable = {
  getTimetable: async (province, code, _level, grade, classNM) => {
    const baseUrl = `https://open.neis.go.kr/hub/${_level}Timetable?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
    const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&ALL_TI_YMD=${getCurrentDate()}&GRADE=${grade}&CLASS_NM=${classNM}`;
    const fetchUrl = encodeURI(baseUrl + paramsUrl);
    let timetable = (await axios.get(fetchUrl)).data;
    if (timetable[`${_level}Timetable`]) {
      timetable = timetable[`${_level}Timetable`][1].row;
      timetable = timetable.map((period) => {
        return {
          period: period.PERIO,
          subject: period.ITRT_CNTNT.replace(/[-]/g, ""),
        };
      });
      return { success: true, data: timetable };
    } else if (timetable.RESULT.CODE === "INFO-200") {
      return { success: true, data: null };
    } else {
      return { success: false, data: null };
    }
  },
};

module.exports = Timetable;
