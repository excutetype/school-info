const axios = require("axios");
const { getCurrentDate } = require("../utils");
const { ApiFetchError } = require("../errors/service");

class Timetable {
  constructor(timetableData) {
    this.timetableData = timetableData;
  }

  async getTimetable() {
    if (!this.timetableData) {
      return undefined;
    }

    const timetable = this.timetableData.map((period) => {
      return {
        period: period.PERIO,
        subject: period.ITRT_CNTNT.replace(/[-]/g, ""),
      };
    });

    return timetable;
  }

  static build(province, code, level, grade, classNM, date = getCurrentDate()) {
    return new Promise((resolve, reject) => {
      const baseUrl = `https://open.neis.go.kr/hub/${level}Timetable?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
      const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&ALL_TI_YMD=${date}&GRADE=${grade}&CLASS_NM=${classNM}`;
      const fetchUrl = encodeURI(baseUrl + paramsUrl);

      axios.get(fetchUrl).then((res) => {
        let timetableData = res.data;

        if (timetableData[`${level}Timetable`]) {
          timetableData = timetableData[`${level}Timetable`][1].row;
          resolve(new Timetable(timetableData));
        } else if (timetableData.RESULT.CODE === "INFO-200") {
          resolve(new Timetable(undefined));
        } else {
          reject(new ApiFetchError("시간표를 가져오는데 실패하였습니다."));
        }
      });
    });
  }
}

module.exports = Timetable;
