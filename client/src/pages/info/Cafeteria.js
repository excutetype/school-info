import styles from "pages/info/Cafeteria.module.css";
import icon from "image/cafeteria_icon.png";

function Cafeteria() {
  return (
    <div className={styles.cafeteria}>
      <div className={styles.iconBox}>
        <img className={styles.icon} src={icon} alt="cafeteria icon" />
      </div>
      <div className={styles.content}>
        현미밥
        <br />
        소고기무국
        <br />
        쭈꾸미볶음
        <br />
        파콩된장무침
        <br />
        배추김치/과일
      </div>
    </div>
  );
}

export default Cafeteria;
