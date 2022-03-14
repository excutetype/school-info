import { useState } from "react";
import Province from "layouts/select/element/Province";
import Level from "layouts/select/element/Level";
import Name from "layouts/select/element/Name";
import Classroom from "layouts/select/element/Classroom";
import Submit from "layouts/select/element/Submit";
import styles from "./index.module.css";

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
