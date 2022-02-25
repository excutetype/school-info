import styles from "components/menu/SelectInfoBtn.module.css";

function SelectInfoBtn({ text, description, pageLocation }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        window.location.href = pageLocation;
      }}
    >
      <span className={styles.text}>{text}</span>
      <br />
      <span className={styles.description}>{description}</span>
    </button>
  );
}

export default SelectInfoBtn;
