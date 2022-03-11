import styles from "./Title.module.css";

function Title({ name, grade, classNM }) {
  return (
    <div className={styles.title_box}>
      {name} {grade}학년 {classNM}반
    </div>
  );
}

export default Title;
