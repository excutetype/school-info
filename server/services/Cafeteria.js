const axios = require("axios");
const { getCurrentDate } = require("../utils");
const { ApiFetchError } = require("../errors/service");

class Cafeteria {
  constructor(cafeteriaData) {
    this.cafeteriaData = cafeteriaData;
  }

  async getCafeteria() {
    if (!this.cafeteriaData) {
      return undefined;
    }

    const cafeteria = this.cafeteriaData.DDISH_NM.replace(/[0-9.]/g, "").split(
      "<br/>"
    );

    return cafeteria;
  }

  static build(province, code, date = getCurrentDate()) {
    return new Promise((resolve, reject) => {
      const baseUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
      const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&MLSV_YMD=${date}`;
      const fetchUrl = encodeURI(baseUrl + paramsUrl);

      axios.get(fetchUrl).then((res) => {
        let cafeteriaData = res.data;

        if (cafeteriaData.mealServiceDietInfo) {
          cafeteriaData = cafeteriaData.mealServiceDietInfo[1].row[0];
          resolve(new Cafeteria(cafeteriaData));
        } else if (cafeteriaData.RESULT.CODE === "INFO-200") {
          resolve(new Cafeteria(undefined));
        } else {
          reject(new ApiFetchError("급식 메뉴를 가져오는데 실패하였습니다."));
        }
      });
    });
  }
}

module.exports = Cafeteria;
