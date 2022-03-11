import { useState } from "react";
import Province from "components/select/Province";
import Level from "components/select/Level";
import Name from "components/select/Name";
import Classroom from "components/select/Classroom";
import Submit from "components/select/Submit";
import styles from "./Panel.module.css";

function Panel({ onSubmit }) {
  const [formData, setFormData] = useState({
    province: undefined,
    level: undefined,
    name: undefined,
    grade: undefined,
    classNM: undefined,
  });

  return (
    <div className={styles.box}>
      <Province callback={setFormData} />
      <Level callback={setFormData} />
      <Name callback={setFormData} />
      <Classroom callback={setFormData} />
      <Submit eventFunc={onSubmit} data={formData} />
    </div>
  );
}

export default Panel;
