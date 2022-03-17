import { useState, useEffect } from "react";
import LoadingTimetable from "./LoadingTimetable";
import TimetableBox from "./TimetableBox";
import TimetableDate from "./TimetableDate";
import TimetableText from "./TimetableText";
import NoneTimetable from "./NoneTimetable";
import Date from "utils/Date";
import RequestData from "modules/RequestData";

function Timetable({ reqParams }) {
  const [loading, setLoading] = useState(true);
  const [timetableData, setTimetableData] = useState();

  useEffect(() => {
    setLoading(true);
    RequestData.get("/api/timetable", {
      ...reqParams,
      date: Date.getCurrentDate("YYYYMMDD"),
    })
      .then((res) => {
        setTimetableData(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [reqParams]);

  return loading ? (
    <LoadingTimetable text="시간표를 가져오는 중입니다..." />
  ) : (
    <TimetableBox>
      {timetableData ? (
        <>
          <TimetableDate />
          <TimetableText data={timetableData} />
        </>
      ) : (
        <NoneTimetable text="시간표를 찾을 수 없습니다." />
      )}
    </TimetableBox>
  );
}

export default Timetable;
