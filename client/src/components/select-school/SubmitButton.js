import clsx from "clsx";
import styles from "./Styles.module.css";

function SubmitButton({ onClickEvent, eventParams }) {
  return (
    <>
      <button
        className={clsx(styles.standard, styles.button)}
        onClick={() => {
          onClickEvent({
            province: eventParams.province,
            level: eventParams.level,
            name: eventParams.name,
            grade: eventParams.grade,
            classNM: eventParams.classNM,
          });
        }}
      >
        확인
      </button>
    </>
  );
}

export default SubmitButton;
