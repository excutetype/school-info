import clsx from "clsx";
import styles from "./ScheduleRange.module.css";

function RangeBtn({ kinds, onClickEvent, selectedValue }) {
  return (
    <div className={styles.range_selecter}>
      {kinds.map((kind, index) => {
        return (
          <button
            className={clsx(
              styles.button,
              kind.value === selectedValue ? styles.selected : null
            )}
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
