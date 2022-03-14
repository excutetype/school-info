import styles from "./CafeteriaDate.module.css";
import Date from "utils/Date";

function CafeteriaDate({ format }) {
  return (
    <div className={styles.date}>
      {Date.getCurrentDate(format)}
      <br /> <br />
    </div>
  );
}

export default CafeteriaDate;
