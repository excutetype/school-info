import styles from "./TimetableBox.module.css";

function TimetableBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default TimetableBox;
