import { useState, useEffect } from "react";
import styles from "./Classroom.module.css";

function Classroom({ callback }) {
  const [grade, setGrade] = useState("");
  const [classNM, setClassNM] = useState("");

  useEffect(() => {
    callback((prev) => {
      return { ...prev, grade: grade };
    });
  }, [grade, callback]);

  useEffect(() => {
    callback((prev) => {
      return { ...prev, classNM: classNM };
    });
  }, [classNM, callback]);

  return (
    <>
      <div className={styles.box}>
        <input
          className={styles.input}
          type="number"
          placeholder="학년을 입력하세요"
          value={grade}
          onChange={(event) => {
            setGrade(event.target.value);
          }}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="반을 입력하세요"
          value={classNM}
          onChange={(event) => {
            setClassNM(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default Classroom;
