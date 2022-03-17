import { useState, useEffect } from "react";
import LoadingSchedule from "./LoadingSchedule";
import ScheduleBox from "./ScheduleBox";
import ScheduleRange from "./ScheduleRange";
import ScheduleText from "./ScheduleText";
import NoneSchedule from "./NoneSchedule";
import Date from "utils/Date";
import RequestData from "modules/RequestData";

function Schedule({ reqParams }) {
  const [loading, setLoading] = useState(true);
  const [scheduleData, setScheduleData] = useState();
  const [scheduleRange, setScheduleRange] = useState("day");

  useEffect(() => {
    setLoading(true);
    let toDate = "";
    if (scheduleRange === "day") {
      toDate = Date.getCurrentDate("YYYYMMDD");
    } else {
      toDate = Date.getNextDate(scheduleRange, "YYYYMMDD");
    }
    RequestData.get("/api/schedule", {
      ...reqParams,
      fromDate: Date.getCurrentDate("YYYYMMDD"),
      toDate: toDate,
    })
      .then((res) => {
        setScheduleData(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [reqParams, scheduleRange]);

  return loading ? (
    <LoadingSchedule text="학사일정을 가져오는 중입니다..." />
  ) : (
    <ScheduleBox>
      <ScheduleRange
        kinds={[
          { text: "Today", value: "day" },
          { text: "Week", value: "week" },
          { text: "Month", value: "month" },
        ]}
        onClickEvent={setScheduleRange}
        selectedValue={scheduleRange}
      />
      <hr />
      {scheduleData && scheduleData.length !== 0 ? (
        <ScheduleText data={scheduleData} />
      ) : (
        {
          day: <NoneSchedule text="오늘의 학사일정이 없습니다." />,
          week: (
            <NoneSchedule text="금일부터 일주일 사이에 학사일정이 없습니다." />
          ),
          month: (
            <NoneSchedule text="금일부터 한달 사이에 학사일정이 없습니다." />
          ),
        }[scheduleRange]
      )}
    </ScheduleBox>
  );
}

export default Schedule;
