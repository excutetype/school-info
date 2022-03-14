import Date from "utils/Date";
import styles from "./ScheduleText.module.css";

function ScheduleText({ data }) {
  return (
    <div className={styles.text_box}>
      {data.map((event, index) => {
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
  );
}

export default ScheduleText;
