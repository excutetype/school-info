function Info_Cafeteria({ contentData }) {
  return (
    <>
      {contentData ? (
        contentData.map((food, index) => {
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
