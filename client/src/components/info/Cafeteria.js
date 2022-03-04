function Info_Cafeteria({ success, contentData }) {
  return (
    <>
      {success ? (
        contentData.split("<br/>").map((food, index) => {
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
    </>
  );
}

export default Info_Cafeteria;
