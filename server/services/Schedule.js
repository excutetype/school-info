const axios = require("axios");
const { ApiFetchError, LackParamsError } = require("../errors/service");

class Schedule {
  constructor(scheduleData) {
    this.scheduleData = scheduleData;
  }

  async getSchedule() {
    if (!this.scheduleData) {
      return undefined;
    }

    const schedule = this.scheduleData
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
        return {
          name: event.EVENT_NM,
          date: event.AA_YMD,
        };
      });

    return schedule;
  }

  static build(province, code, fromDate, toDate) {
    return new Promise((resolve, reject) => {
      if (!province || !code) {
        reject(
          new LackParamsError("학사일정 요청에 필요한 인자가 부족합니다.")
        );
      }

      const baseUrl = `https://open.neis.go.kr/hub/SchoolSchedule?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
      const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&AA_FROM_YMD=${fromDate}&AA_TO_YMD=${toDate}`;
      const fetchUrl = encodeURI(baseUrl + paramsUrl);

      axios.get(fetchUrl).then((res) => {
        let scheduleData = res.data;

        if (scheduleData.SchoolSchedule) {
          scheduleData = scheduleData.SchoolSchedule[1].row;
          resolve(new Schedule(scheduleData));
        } else if (scheduleData.RESULT.CODE === "INFO-200") {
          resolve(new Schedule(undefined));
        } else {
          reject(new ApiFetchError("학사일정을 가져오는데 실패하였습니다."));
        }
      });
    });
  }
}

module.exports = Schedule;
