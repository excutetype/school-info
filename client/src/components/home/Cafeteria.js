import { useState, useEffect } from "react";
import axios from "axios";
import Date from "utils/Date";
import styles from "./Cafeteria.module.css";

function Cafeteria({ reqParams }) {
  const [loading, setLoading] = useState(true);
  const [cafeteria, setCafeteria] = useState();

  const { province, code } = reqParams;
  useEffect(() => {
    getCafeteria(province, code)
      .then((res) => {
        setCafeteria(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [province, code]);

  return (
    <>
      {loading ? (
        <span className={styles.loading}>급식 메뉴를 준비중입니다...</span>
      ) : (
        <div className={styles.contents_box}>
          <div className={styles.date}>
            {Date.getCurrentDate("YYYY년 MM월 DD일")}
            <br /> <br />
          </div>
          {cafeteria.map((menu, index) => {
            return (
              <span className={styles.menu} key={index}>
                {menu}
                <hr className={styles.hr} />
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}

function getCafeteria(province, code) {
  return new Promise((resolve, reject) => {
    axios
      .get(`api/cafeteria?province=${province}&code=${code}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const status = err.response.status;
        const message = err.response.data;
        reject(`${status} Error!\n${message}`);
      });
  });
}

export default Cafeteria;
