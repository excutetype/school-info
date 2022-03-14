import styles from "./TimetableText.module.css";

function TimetableText({ data }) {
  return (
    <table className={styles.table}>
      <tbody>
        {data.map((period, index) => {
          return (
            <tr key={index}>
              <td className={styles.td}>{period.period}교시</td>
              <td className={styles.td}>{period.subject}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TimetableText;
