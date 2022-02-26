import { useState, useEffect } from "react";
import axios from "axios";
import { getLocalStorage } from "custom_module";
import styles from "pages/Cafeteria.module.css";
import icon from "image/cafeteria_icon.png";

function Cafeteria() {
  let [cafeteria, setCafeteria] = useState({
    success: undefined,
    data: undefined,
  });
  let { province, code } = getLocalStorage(["province", "code"]);
  useEffect(async () => {
    try {
      const data = await getCafeteria(province, code);
      setCafeteria(data);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div className={styles.cafeteria}>
      <div className={styles.iconBox}>
        <img className={styles.icon} src={icon} alt="cafeteria icon" />
      </div>
      <div className={styles.content}>
        {cafeteria.success ? (
          cafeteria.split("<br/>").map((food, index) => {
            return (
              <span key={index}>
                {food}
                <br />
              </span>
            );
          })
        ) : (
          <span>
            급식 정보가
            <br />
            존재하지 않습니다.
          </span>
        )}
      </div>
    </div>
  );
}

function getCafeteria(province, code) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/cafeteria?province=${province}&code=${code}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default Cafeteria;
