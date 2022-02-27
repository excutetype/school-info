import styles from "./Icon.module.css";

function Icon_Box({ iconName }) {
  const icon = require(`image/${iconName}_icon.png`);
  return (
    <div className={styles.iconBox}>
      <img
        className={styles.icon}
        src={icon}
        alt={`${iconName}page representative icon`}
      />
    </div>
  );
}

export default Icon_Box;
