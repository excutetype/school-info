import clsx from "clsx";
import styles from "./Styles.module.css";

function LevelOption({ value, setValue }) {
  return (
    <>
      <select
        className={clsx(styles.standard)}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <option value="initial">학교급을 선택하세요</option>
        <option value="초등학교">초등학교</option>
        <option value="중학교">중학교</option>
        <option value="고등학교">고등학교</option>
      </select>
    </>
  );
}

export default LevelOption;
