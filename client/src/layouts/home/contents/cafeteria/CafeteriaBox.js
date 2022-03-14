import styles from "./CafeteriaBox.module.css";

function CafeteriaBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default CafeteriaBox;
