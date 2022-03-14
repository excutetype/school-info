import Date from "utils/Date";
import styles from "./TimetableDate.module.css";

function TimetableDate() {
  return (
    <div className={styles.date}>
      {Date.getCurrentDayOfTheWeek()}요일
      <br />
      <br />
    </div>
  );
}

export default TimetableDate;
