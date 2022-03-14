import clsx from "clsx";
import styles from "./Selecter.module.css";

function Selecter({ kind, onClickEvent, selected }) {
  return (
    <div className={styles.selecter_box}>
      {kind.map((name, index) => {
        return (
          <img
            className={clsx(
              styles.image,
              name === selected ? styles.selected : null
            )}
            key={index}
            src={require(`image/${name}_icon.png`)}
            alt={`${name}정보를 확인하는 버튼`}
            name={name}
            onClick={(event) => {
              onClickEvent(event.target.name);
            }}
          />
        );
      })}
    </div>
  );
}

export default Selecter;
