import { useState, useEffect } from "react";
import axios from "axios";
import Date from "utils/Date";
import styles from "./Timetable.module.css";

function Timetable({ reqParams }) {
  const [loading, setLoading] = useState(true);
  const [timetable, setTimetable] = useState();

  const { province, code, level, grade, classNM } = reqParams;
  useEffect(() => {
    getTimetable(province, code, level, grade, classNM)
      .then((res) => {
        setTimetable(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [province, code, level, grade, classNM]);

  return (
    <>
      {loading ? (
        <span className={styles.loading}>시간표를 준비중입니다...</span>
      ) : (
        <div className={styles.contents_box}>
          <div className={styles.date}>
            {Date.getCurrentDayOfTheWeek()}요일
            <br />
            <br />
          </div>
          <table className={styles.table}>
            <tbody>
              {timetable.map((period, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.td}>{period.period}교시</td>
                    <td className={styles.td}>{period.subject}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function getTimetable(province, code, level, grade, classNM) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `api/timetable?province=${province}&code=${code}&level=${level}&grade=${grade}&classNM=${classNM}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const status = err.response.status;
        const message = err.response.data;
        reject(`${status} Error!\n${message}`);
      });
  });
}

export default Timetable;
