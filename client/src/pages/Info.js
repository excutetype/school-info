import { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import Loading from "components/info/Loading";
import Icon from "components/info/Icon";
import Cafeteria from "components/info/Cafeteria";
import Schedule from "components/info/Schedule";
import Back from "components/info/Back";
import { getLocalStorage } from "custom_module";
import styles from "./Info.module.css";

function Info() {
  const queryParams = queryString.parse(window.location.search);
  let [contentData, setContentData] = useState({
    success: undefined,
    data: undefined,
  });
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
        const data = await getContentData({
          type: queryParams.contentType,
          urlParams: {
            province: province,
            code: code,
            level: level,
            grade: grade,
            classNM: classNM,
          },
        });
        setContentData(data);
      })();
      setOnLoading(true);
    } catch (err) {
      alert(err);
    }
  }, [queryParams.contentType]);
  console.log(onLoading);
  return (
    <div className={styles.Info}>
      <Icon iconName={queryParams.contentType} />
      <div className={styles.content}>
        {onLoading ? (
          getContentJSX({
            type: queryParams.contentType,
            contentData: contentData,
          })
        ) : (
          <Loading />
        )}
      </div>
      <Back />
    </div>
  );
}

function getContentData({ type, urlParams }) {
  return new Promise((resolve, reject) => {
    let fetchUrl = `/api/${type}`;
    if (type === "cafeteria") {
      fetchUrl += `?province=${urlParams.province}&code=${urlParams.code}`;
    } else if (type === "schedule") {
      fetchUrl += `?province=${urlParams.province}&code=${urlParams.code}&level=${urlParams.level}&grade=${urlParams.grade}&classNM=${urlParams.classNM}`;
    }
    axios
      .get(fetchUrl)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getContentJSX({ type, contentData }) {
  if (type === "cafeteria") {
    return (
      <Cafeteria success={contentData.success} contentData={contentData.data} />
    );
  } else if (type === "schedule") {
    return (
      <Schedule success={contentData.success} contentData={contentData.data} />
    );
  }
}

export default Info;
