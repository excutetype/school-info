const axios = require("axios");
const { getCurrentDate } = require("../custom_module");

const Cafeteria = {
  getCafeteria: async (province, code) => {
    const baseUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
    const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&MLSV_YMD=${getCurrentDate()}`;
    const fetchUrl = encodeURI(baseUrl + paramsUrl);
    let cafeteria = (await axios.get(fetchUrl)).data;
    if (cafeteria.mealServiceDietInfo) {
      cafeteria = cafeteria.mealServiceDietInfo[1].row[0].DDISH_NM.replace(
        /[0-9.]/g,
        ""
      );
      return { success: true, data: cafeteria };
    } else if (cafeteria.RESULT.CODE === "INFO-200") {
      return { success: true, data: null };
    } else {
      return { success: false, data: null };
    }
  },
};

module.exports = Cafeteria;
