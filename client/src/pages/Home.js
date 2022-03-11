import { useState } from "react";
import Title from "components/home/Title";
import Selecter from "components/home/Selecter";
import Content from "components/home/Content";
import LocalStorage from "utils/LocalStroage";
import styles from "./Home.module.css";

function Home() {
  const [contentType, setContentType] = useState("cafeteria");

  const schoolDataNames = [
    "province",
    "level",
    "name",
    "code",
    "grade",
    "classNM",
  ];
  const data = LocalStorage.get(schoolDataNames);

  return (
    <div className={styles.contents_box}>
      <div className={styles.header}>
        <Title name={data.name} grade={data.grade} classNM={data.classNM} />
      </div>
      <div className={styles.article}>
        <Content type={contentType} reqParams={data} />
      </div>
      <div className={styles.footer}>
        <Selecter
          kind={["cafeteria", "timetable", "schedule"]}
          onClickEvent={setContentType}
          selected={contentType}
        />
      </div>
    </div>
  );
}

export default Home;
