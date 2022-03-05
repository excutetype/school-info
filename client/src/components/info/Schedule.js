import styles from "./Schedule.module.css";

function Info_Shcedule({ contentData }) {
  return (
    <>
      {contentData ? (
        contentData.map((event, index) => {
          return (
            <span key={index} className={styles.event}>
              {event.title}: {event.date}
              <br />
            </span>
          );
        })
      ) : (
        <span>
          학사 일정이
          <br />
          존재하지 않습니다.
        </span>
      )}
    </>
  );
}

export default Info_Shcedule;
