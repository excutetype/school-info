const axios = require("axios");

const SchoolData = {
  getSchoolData: async (province, name, level) => {
    baseUrl =
      "https://open.neis.go.kr/hub/schoolInfo?KEY=c06a68753a51463aac97cfe9f043e8d2&Type=json&pindex=1&pSize100";
    paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SCHUL_NM=${name}&SCHUL_KND_SC_NM=${level}`;
    fetchUrl = encodeURI(baseUrl + paramsUrl);
    let schoolData = (await axios.get(fetchUrl)).data;
    if (schoolData.schoolInfo) {
      schoolData = schoolData.schoolInfo[1].row[0];
      return {
        success: true,
        province: schoolData.ATPT_OFCDC_SC_CODE,
        code: schoolData.SD_SCHUL_CODE,
      };
    } else {
      return {
        success: false,
      };
    }
  },
};

module.exports = SchoolData;
