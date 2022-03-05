import styles from "./Timetable.module.css";

function Info_Timetable({ contentData }) {
  return (
    <>
      {contentData ? (
        <table className={styles.table}>
          <tbody>
            {contentData.map((period, index) => {
              return (
                <tr key={index}>
                  <td className={styles.td}>{period.period}교시</td>
                  <td className={styles.td}>{period.subject}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <span>
          시간표 정보가
          <br />
          존재하지 않습니다.
        </span>
      )}
    </>
  );
}

export default Info_Timetable;
