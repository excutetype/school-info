import styles from "./Submit.module.css";

function Submit({ eventFunc, data }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        eventFunc(data);
      }}
    >
      확인
    </button>
  );
}

export default Submit;
