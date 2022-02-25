import SelectInfoBtn from "components/menu/SelectInfoBtn";
import styles from "pages/menu/Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <SelectInfoBtn
        text="급식표"
        description="급식 메뉴를 알려줍니다."
        pageLocation="/cafeteria"
      />
      <SelectInfoBtn
        text="시간표"
        description="금일 시간표를 알려줍니다."
        pageLocation="/schedule"
      />
    </div>
  );
}

export default Menu;
