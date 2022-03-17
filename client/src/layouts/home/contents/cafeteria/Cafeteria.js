import { useState, useEffect } from "react";
import LoadingCafeteria from "./LoadingCafeteria";
import CafeteriaBox from "./CafeteriaBox";
import CafeteriaText from "./CafeteriaText";
import NoneCafeteria from "./NoneCafeteria";
import CafeteriaDate from "./CafeteriaDate";
import Date from "utils/Date";
import RequestData from "modules/RequestData";

function Cafeteria({ reqParams }) {
  const [loading, setLoading] = useState(true);
  const [cafeteriaData, setCafeteriaData] = useState();

  useEffect(() => {
    setLoading(true);
    RequestData.get("/api/cafeteria", {
      ...reqParams,
      date: Date.getCurrentDate("YYYYMMDD"),
    })
      .then((res) => {
        setCafeteriaData(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [reqParams]);

  return loading ? (
    <LoadingCafeteria text="급식 정보를 가져오는 중입니다..." />
  ) : (
    <CafeteriaBox>
      {cafeteriaData ? (
        <>
          <CafeteriaDate format={"YYYY년 MM월 DD일"} />
          <CafeteriaText data={cafeteriaData} />
        </>
      ) : (
        <NoneCafeteria text="오늘은 급식이 없습니다" />
      )}
    </CafeteriaBox>
  );
}

export default Cafeteria;
