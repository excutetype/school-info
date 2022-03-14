import styles from "./ScheduleBox.module.css";

function ScheduleBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default ScheduleBox;
