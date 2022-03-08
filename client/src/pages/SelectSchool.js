import { useState } from "react";
import axios from "axios";
import ProvinceSelect from "components/select-school/ProvinceSelect";
import LevelSelect from "components/select-school/LevelSelect";
import NameInput from "components/select-school/NameInput";
import ClassroomInput from "components/select-school/ClassroomInput";
import SubmitButton from "components/select-school/SubmitButton";
import { setLocalStorage } from "custom_module";
import styles from "./SelectSchool.module.css";

function Home() {
  let [province, setProvince] = useState("");
  let [level, setLevel] = useState("");
  let [name, setName] = useState("");
  let [grade, setGrade] = useState("");
  let [classNM, setclassNM] = useState("");

  return (
    <div className={styles.selectBox}>
      <ProvinceSelect value={province} setValue={setProvince} />
      <LevelSelect value={level} setValue={setLevel} />
      <NameInput value={name} setValue={setName} />
      <ClassroomInput
        value={[grade, classNM]}
        setValue={[setGrade, setclassNM]}
      />
      <SubmitButton
        onClickEvent={getSchoolSummaryData}
        eventParams={{
          province: province,
          level: level,
          name: name,
          grade: grade,
          classNM: classNM,
        }}
      />
    </div>
  );
}

function getSchoolSummaryData({ province, level, name, grade, classNM }) {
  if (!province || !level || !name || !grade || !classNM) {
    alert("입력 창을 확인하여 주십시오.");
    return;
  }
  axios
    .get(`/api/schoolSummary?province=${province}&level=${level}&name=${name}`)
    .then((res) => {
      const schoolSummary = res.data;
      const { province, code, level } = schoolSummary;
      setLocalStorage([
        { province: province },
        { code: code },
        { level: level },
        { grade: grade },
        { classNM: classNM },
      ]);
      window.location.href = "/";
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

export default Home;
