const axios = require("axios");

const SchoolData = {
  getSchoolData: async (province, name, level) => {
    baseUrl = process.env.NEIS_API_SCHOOLINFO_URL;
    paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SCHUL_NM=${name}&SCHUL_KND_SC_NM=${level}`;
    fetchUrl = encodeURI(baseUrl + paramsUrl);
    let schoolData = (await axios.get(fetchUrl)).data;
    if (schoolData.schoolInfo) {
      schoolData = schoolData.schoolInfo[1].row[0];
      return {
        success: true,
        province: schoolData.ATPT_OFCDC_SC_CODE,
        code: schoolData.SD_SCHUL_CODE,
        level: convertSchoolLevel(schoolData.SCHUL_KND_SC_NM),
      };
    } else {
      return {
        success: false,
      };
    }
  },
};

function convertSchoolLevel(level) {
  if (level === "초등학교") {
    return "els";
  } else if (level === "중학교") {
    return "mis";
  } else {
    return "his";
  }
}

module.exports = SchoolData;
