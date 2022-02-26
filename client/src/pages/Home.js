import SelectInfo from "components/home/SelectInfo";
import styles from "./Home.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <SelectInfo
        text="급식표"
        description="급식 메뉴를 알려줍니다."
        pageLocation="/info?contentType=cafeteria"
      />
      <SelectInfo
        text="시간표"
        description="금일 시간표를 알려줍니다."
        pageLocation="/info?contentType=schedule"
      />
    </div>
  );
}

export default Menu;
