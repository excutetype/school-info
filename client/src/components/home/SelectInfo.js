import nextIcon from "image/next_icon.png";
import styles from "./SelectInfo.module.css";

function SelectInfoBtn({ text, pageLocation }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        window.location.href = pageLocation;
      }}
    >
      <span className={styles.text}>{text}</span>
      <img className={styles.icon} src={nextIcon} alt="go to the info page" />
    </button>
  );
}

export default SelectInfoBtn;
