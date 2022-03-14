import styles from "./CafeteriaText.module.css";

function CafeteriaText({ data }) {
  return (
    <>
      {data.map((menu, index) => {
        return (
          <span className={styles.menu} key={index}>
            {menu}
            <hr className={styles.hr} />
          </span>
        );
      })}
    </>
  );
}

export default CafeteriaText;
