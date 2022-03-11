import { useState, useEffect } from "react";
import styles from "./Level.module.css";

function Level({ callback }) {
  const [level, setLevel] = useState("");

  useEffect(() => {
    callback((prev) => {
      return { ...prev, level: level };
    });
  }, [level, callback]);

  return (
    <select
      className={styles.select}
      value={level}
      onChange={(event) => {
        setLevel(event.target.value);
      }}
    >
      <option value="initial">학교급을 선택하세요</option>
      <option value="초등학교">초등학교</option>
      <option value="중학교">중학교</option>
      <option value="고등학교">고등학교</option>
    </select>
  );
}

export default Level;
