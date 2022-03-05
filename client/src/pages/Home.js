import SelectInfo from "components/home/SelectInfo";
import styles from "./Home.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <SelectInfo
        text="냠냠 맛있는 급식"
        pageLocation="/info?contentType=cafeteria"
      />
      <hr className={styles.hr} />
      <SelectInfo
        text="오늘의 시간표"
        pageLocation="/info?contentType=timetable"
      />
      <hr className={styles.hr} />
      <SelectInfo
        text="올해의 일정"
        pageLocation="/info?contentType=schedule"
      />
      <hr className={styles.hr} />
    </div>
  );
}

export default Menu;
