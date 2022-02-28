import styles from "./Back.module.css";

function Back() {
  return (
    <div className={styles.backBox}>
      <button
        className={styles.back}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        MENU
      </button>
    </div>
  );
}

export default Back;
