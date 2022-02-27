import clsx from "clsx";
import styles from "./Styles.module.css";

function ClassroomInput({ value, setValue }) {
  return (
    <>
      <div className={clsx(styles.standard, styles.inputBox)}>
        <input
          className={clsx(styles.standard, styles.input)}
          type="number"
          placeholder="학년을 입력하세요"
          value={value[0]}
          onChange={(event) => {
            setValue[0](event.target.value);
          }}
        />
        <input
          className={clsx(styles.standard, styles.input)}
          type="number"
          placeholder="반을 입력하세요"
          value={value[1]}
          onChange={(event) => {
            setValue[1](event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default ClassroomInput;
