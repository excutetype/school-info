const axios = require("axios");
const { getCurrentDate } = require("../custom_module");

const Cafeteria = {
  getCafeteria: async (province, code) => {
    const baseUrl = process.env.NEIS_API_CAFETERIA_URL;
    const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SD_SCHUL_CODE=${code}&MLSV_YMD=${getCurrentDate()}`;
    const fetchUrl = encodeURI(baseUrl + paramsUrl);
    let cafeteria = (await axios.get(fetchUrl)).data;
    if (cafeteria.mealServiceDietInfo) {
      cafeteria = cafeteria.mealServiceDietInfo[1].row[0];
      return cafeteria.DDISH_NM.replace(/[0-9.]/g, "");
    } else {
      return "급식 정보가<br/>존재하지 않습니다.";
    }
  },
};

module.exports = Cafeteria;