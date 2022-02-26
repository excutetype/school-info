import { useState, useEffect } from "react";
import axios from "axios";
import { getLocalStorage } from "custom_module";
import styles from "pages/Schedule.module.css";
import icon from "image/schedule_icon.png";

function Schedule() {
  let [schedule, setSchedule] = useState({
    success: undefined,
    data: undefined,
  });
  let { province, code, level } = getLocalStorage([
    "province",
    "code",
    "level",
  ]);
  useEffect(async () => {
    try {
      const data = await getSchedule(province, code, level);
      setSchedule({ success: data.success, data: data.data });
    } catch (err) {
      alert(err);
    }
  }, []);
  return (
    <div className={styles.schedule}>
      <div className={styles.iconBox}>
        <img className={styles.icon} src={icon} alt="schedule icon" />
      </div>
      <div className={styles.content}>
        {schedule.success ? (
          <table className={styles.scheduleTable}>
            <tbody>
              {schedule.data.map((period, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.scheduleTableData}>
                      {period.period}교시
                    </td>
                    <td className={styles.scheduleTableData}>
                      {period.subject}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <span>
            시간표 정보가
            <br />
            존재하지 않습니다.
          </span>
        )}
      </div>
    </div>
  );
}

function getSchedule(province, code, level) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/schedule?province=${province}&code=${code}&level=${level}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default Schedule;
