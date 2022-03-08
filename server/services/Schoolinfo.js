const axios = require("axios");
const { ApiFetchError, DataNotExistError } = require("../errors/service");

class Schoolinfo {
  constructor(schoolinfoData) {
    this.schoolinfoData = schoolinfoData;
  }

  async getSchoolSummaryData() {
    if (!this.schoolinfoData) {
      return undefined;
    }

    const schoolSummaryData = {
      province: this.schoolinfoData.ATPT_OFCDC_SC_CODE,
      code: this.schoolinfoData.SD_SCHUL_CODE,
      level: convertSchoolLevel(this.schoolinfoData.SCHUL_KND_SC_NM),
    };

    return schoolSummaryData;
  }

  static build(province, name, level) {
    return new Promise((resolve, reject) => {
      const baseUrl = `https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.NEIS_API_KEY}&Type=json&pindex=1&pSize100`;
      const paramsUrl = `&ATPT_OFCDC_SC_CODE=${province}&SCHUL_NM=${name}&SCHUL_KND_SC_NM=${level}`;
      const fetchUrl = encodeURI(baseUrl + paramsUrl);

      axios.get(fetchUrl).then((res) => {
        let schoolinfoData = res.data;

        if (schoolinfoData.schoolInfo) {
          schoolinfoData = schoolinfoData.schoolInfo[1].row[0];
          resolve(new Schoolinfo(schoolinfoData));
        } else if (schoolinfoData.RESULT.CODE === "INFO-200") {
          reject(new DataNotExistError("해당하는 학교가 존재하지 않습니다."));
        } else {
          reject(new ApiFetchError("학교 정보를 가져오는데 실패하였습니다."));
        }
      });
    });
  }
}

function convertSchoolLevel(level) {
  if (level === "초등학교") {
    return "els";
  } else if (level === "중학교") {
    return "mis";
  } else {
    return "his";
  }
}

module.exports = Schoolinfo;
