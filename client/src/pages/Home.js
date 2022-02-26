import { useState } from "react";
import axios from "axios";
import { setLocalStorage } from "custom_module";
import clsx from "clsx";
import styles from "pages/Home.module.css";

function Home() {
  let [province, setProvince] = useState("");
  let [level, setLevel] = useState("");
  let [name, setName] = useState("");

  return (
    <div className={styles.selectBox}>
      <select
        className={clsx(styles.selectFormat, styles.selectTag)}
        value={province}
        onChange={(event) => {
          setProvince(event.target.value);
        }}
      >
        <option value="initial">시/도를 선택하세요</option>
        <option value="B10">서울특별시</option>
        <option value="C10">부산광역시</option>
        <option value="D10">대구광역시</option>
        <option value="E10">인천광역시</option>
        <option value="F10">광주광역시</option>
        <option value="G10">대전광역시</option>
        <option value="H10">울산광역시</option>
        <option value="I10">세종특별자치시</option>
        <option value="J10">경기도</option>
        <option value="K10">강원도</option>
        <option value="M10">충청북도</option>
        <option value="N10">충청남도</option>
        <option value="P10">전라북도</option>
        <option value="Q10">전라남도</option>
        <option value="R10">경상북도</option>
        <option value="S10">경상남도</option>
        <option value="T10">제주특별자치도</option>
      </select>

      <select
        className={clsx(styles.selectFormat, styles.selectTag)}
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

      <input
        className={clsx(styles.selectFormat, styles.inputTag)}
        type="text"
        placeholder="학교명을 입력하세요"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <button
        className={clsx(styles.selectFormat, styles.buttonTag)}
        onClick={() => {
          getSchoolData({ province, level, name });
        }}
      >
        확인
      </button>
    </div>
  );
}

function getSchoolData({ province, level, name }) {
  if (!province || !level || !name) {
    alert("모두 입력하여 주십시오");
    return;
  }
  axios
    .post("/api/schoolData", {
      headers: {
        "Content-Type": "application/json",
      },
      province: province,
      level: level,
      name: name,
    })
    .then((res) => {
      const { success } = res.data;
      if (!success) {
        throw new Error("존재하지 않는 학교입니다.");
      }
      const { province, code, level } = res.data;
      setLocalStorage([
        { province: province },
        { code: code },
        { level: level },
      ]);
      window.location.href = "/";
    })
    .catch((err) => {
      alert(err);
    });
}

export default Home;
