import styles from "./Back.module.css";

function Back() {
  return (
    <button
      className={styles.back}
      onClick={() => {
        window.location.href = "/";
      }}
    >
      MENU
    </button>
  );
}

export default Back;
