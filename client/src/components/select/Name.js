import { useState, useEffect } from "react";
import styles from "./Name.module.css";

function Name({ callback }) {
  const [name, setName] = useState("");

  useEffect(() => {
    callback((prev) => {
      return { ...prev, name: name };
    });
  }, [name, callback]);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="학교명을 입력하세요"
      value={name}
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
  );
}

export default Name;
