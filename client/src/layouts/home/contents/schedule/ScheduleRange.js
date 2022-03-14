import styles from "./ScheduleRange.module.css";

function RangeBtn({ kinds, onClickEvent }) {
  return (
    <div className={styles.range_selecter}>
      {kinds.map((kind, index) => {
        return (
          <button
            className={styles.button}
            key={index}
            value={kind.value}
            onClick={(event) => {
              onClickEvent(event.target.value);
            }}
          >
            {kind.text}
          </button>
        );
      })}
    </div>
  );
}

export default RangeBtn;
