import { useState } from "react";
import Header from "layouts/home/title/Title";
import Cafeteria from "layouts/home/contents/cafeteria/Cafeteria";
import Timetable from "layouts/home/contents/timetable/Timetable";
import Schedule from "layouts/home/contents/schedule/Schedule";
import Selecter from "layouts/home/selecter/Selecter";

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
  const storageData = LocalStorage.get(schoolDataNames);

  return (
    <div className={styles.contents_box}>
      <div className={styles.header}>
        <Header
          name={storageData.name}
          grade={storageData.grade}
          classNM={storageData.classNM}
        />
      </div>
      <div className={styles.article}>
        {
          {
            cafeteria: <Cafeteria reqParams={storageData} />,
            timetable: <Timetable reqParams={storageData} />,
            schedule: <Schedule reqParams={storageData} />,
          }[contentType]
        }
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
