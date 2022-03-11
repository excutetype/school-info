import axios from "axios";
import Panel from "components/select/Panel";
import LocalStorage from "utils/LocalStroage";
import styles from "./Select.module.css";

function Select() {
  return (
    <div className={styles.contents_box}>
      <Panel onSubmit={submitProcess} />
    </div>
  );
}

async function submitProcess(formData) {
  if (
    !formData.province ||
    !formData.level ||
    !formData.name ||
    !formData.grade ||
    !formData.classNM
  ) {
    alert("항목을 모두 채워주세요!");
    return;
  }
  try {
    const summaryData = await getSchoolSummary(
      formData.province,
      formData.level,
      formData.name
    );
    LocalStorage.save([
      { province: summaryData.province },
      { level: summaryData.level },
      { name: summaryData.name },
      { code: summaryData.code },
      { grade: formData.grade },
      { classNM: formData.classNM },
    ]);
    window.location.href = "/";
  } catch (err) {
    alert(err);
  }
}

function getSchoolSummary(province, level, name) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `/api/schoolSummary?province=${province}&level=${level}&name=${name}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const status = err.response.status;
        const message = err.response.data;
        reject(`${status} Error!\n${message}`);
      });
  });
}

export default Select;
