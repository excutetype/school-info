import { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import Loading from "components/info/Loading";
import Icon from "components/info/Icon";
import Cafeteria from "components/info/Cafeteria";
import Timetable from "components/info/Timetable";
import Schedule from "components/info/Schedule";
import Back from "components/info/Back";
import { getLocalStorage } from "custom_module";
import styles from "./Info.module.css";

function Info() {
  const contentType = queryString.parse(window.location.search).contentType;
  let [contentData, setContentData] = useState();
  let [onLoading, setOnLoading] = useState(false);
  useEffect(() => {
    try {
      const { province, code, level, grade, classNM } = getLocalStorage([
        "province",
        "code",
        "level",
        "grade",
        "classNM",
      ]);
      (async function setData() {
        const data = await getContentData(contentType, {
          province: province,
          code: code,
          level: level,
          grade: grade,
          classNM: classNM,
        });
        setContentData(data);
        setOnLoading(true);
      })();
    } catch (err) {
      alert(err);
    }
  }, [contentType]);
  return (
    <div className={styles.Info}>
      <Icon iconName={contentType} />
      <div className={styles.content}>
        {onLoading ? getContentJSX(contentType, contentData) : <Loading />}
      </div>
      <Back />
    </div>
  );
}

function getContentData(type, urlParams) {
  return new Promise((resolve, reject) => {
    let fetchUrl = `/api/${type}`;
    if (type === "cafeteria") {
      fetchUrl += `?province=${urlParams.province}&code=${urlParams.code}`;
    } else if (type === "timetable") {
      fetchUrl += `?province=${urlParams.province}&code=${urlParams.code}&level=${urlParams.level}&grade=${urlParams.grade}&classNM=${urlParams.classNM}`;
    } else if (type === "schedule") {
      fetchUrl += `?province=${urlParams.province}&code=${urlParams.code}`;
    }
    axios
      .get(fetchUrl)
      .then((res) => {
        const contentData = res.data;
        resolve(contentData);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

function getContentJSX(type, contentData) {
  if (type === "cafeteria") {
    return <Cafeteria contentData={contentData} />;
  } else if (type === "timetable") {
    return <Timetable contentData={contentData} />;
  } else if (type === "schedule") {
    return <Schedule contentData={contentData} />;
  }
}

export default Info;
