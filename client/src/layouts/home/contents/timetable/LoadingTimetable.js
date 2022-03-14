import styles from "./LoadingTimetable.module.css";

function LoadingTimetable({ text }) {
  return <span className={styles.loading}>{text}</span>;
}

export default LoadingTimetable;
