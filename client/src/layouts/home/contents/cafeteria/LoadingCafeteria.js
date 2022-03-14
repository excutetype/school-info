import styles from "./LoadingCafeteria.module.css";

function LoadingCafeteria({ text }) {
  return <span className={styles.loading}>{text}</span>;
}

export default LoadingCafeteria;
