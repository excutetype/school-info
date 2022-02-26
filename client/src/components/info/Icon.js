import styles from "./Icon.module.css";

function Info_Icon_Box({ iconName }) {
  const icon = require(`image/${iconName}_icon.png`);
  return (
    <div className={styles.iconBox}>
      <img className={styles.icon} src={icon} alt="cafeteria icon" />
    </div>
  );
}

export default Info_Icon_Box;
