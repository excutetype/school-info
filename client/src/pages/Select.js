import Form from "layouts/select";
import LocalStorage from "utils/LocalStroage";
import RequestData from "modules/RequestData";
import styles from "./Select.module.css";

function Select() {
  return (
    <div className={styles.contents_box}>
      <Form onSubmit={submitProcess} />
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
    const summaryData = await RequestData.get("/api/schoolSummary", {
      province: formData.province,
      level: formData.level,
      name: formData.name,
    });
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

export default Select;
