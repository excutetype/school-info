import { useState, useEffect } from "react";
import axios from "axios";
import Date from "utils/Date";
import styles from "./Schedule.module.css";

function Schedule({ reqParams }) {
  const [loading, setLoading] = useState(true);
  const [scheduleRange, setScheduleRange] = useState("day");
  const [schedule, setSchedule] = useState();

  const { province, code } = reqParams;
  useEffect(() => {
    setLoading(true);
    getSchedule(province, code, scheduleRange)
      .then((res) => {
        setSchedule(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [scheduleRange, province, code]);

  return (
    <>
      {loading ? (
        <span className={styles.loading}>학사일정을 준비중입니다...</span>
      ) : (
        <div className={styles.contents_box}>
          <div className={styles.range_selecter}>
            <button
              className={styles.button}
              value="day"
              onClick={(event) => {
                setScheduleRange(event.target.value);
              }}
            >
              Today
            </button>
            <button
              className={styles.button}
              value="week"
              onClick={(event) => {
                setScheduleRange(event.target.value);
              }}
            >
              Week
            </button>
            <button
              className={styles.button}
              value="month"
              onClick={(event) => {
                setScheduleRange(event.target.value);
              }}
            >
              Month
            </button>
          </div>
          <hr />
          <div className={styles.schedule}>
            {schedule.map((event, index) => {
              return (
                <span key={index} className={styles.event}>
                  {event.date === Date.getCurrentDate("YYYYMMDD")
                    ? "오늘"
                    : Date.convertFormat(event.date, "MM월DD일")}
                  : {event.name}
                  <br />
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

function getSchedule(province, code, toDate) {
  return new Promise((resolve, reject) => {
    axios
      .get(`api/schedule?province=${province}&code=${code}&toDate=${toDate}`)
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

export default Schedule;
