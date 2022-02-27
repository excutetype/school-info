import clsx from "clsx";
import styles from "./Styles.module.css";

function NameInput({ value, setValue }) {
  return (
    <>
      <input
        className={clsx(styles.standard)}
        type="text"
        placeholder="학교명을 입력하세요"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
}

export default NameInput;
