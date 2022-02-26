import styles from "./Schedule.module.css";

function Info_Cafeteria({ success, contentData }) {
  return (
    <div className={styles.content}>
      {success ? (
        <table className={styles.scheduleTable}>
          <tbody>
            {contentData.map((period, index) => {
              return (
                <tr key={index}>
                  <td className={styles.scheduleTableData}>
                    {period.period}교시
                  </td>
                  <td className={styles.scheduleTableData}>{period.subject}</td>
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
    </div>
  );
}

export default Info_Cafeteria;
