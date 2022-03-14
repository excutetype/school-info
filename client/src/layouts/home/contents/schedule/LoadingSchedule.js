import styles from "./LoadingSchedule.module.css";

function LoadingSchedule({ text }) {
  return <span className={styles.loading}>{text}</span>;
}

export default LoadingSchedule;
