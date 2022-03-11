import Cafeteria from "components/home/Cafeteria";
import Timetable from "components/home/Timetable";
import Schedule from "components/home/Schedule";

function Content({ type, reqParams }) {
  if (type === "cafeteria") {
    return <Cafeteria reqParams={reqParams} />;
  } else if (type === "timetable") {
    return <Timetable reqParams={reqParams} />;
  } else if (type === "schedule") {
    return <Schedule reqParams={reqParams} />;
  }
}

export default Content;
