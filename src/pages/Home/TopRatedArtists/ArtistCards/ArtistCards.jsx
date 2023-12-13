import s from './ArtistCards.module.css';

const ArtistCards = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.content_one}>
            <div className={s.box_one}>
              <p className={s.number}>1</p>
            </div>
            <img
              className={s.img}
              src="userProfiles/user_1/userImg.png"
              alt="broken"
            />
          </div>
          <div className={s.content_two}>
            <h5>Keepitreal</h5>
            <div className={s.box_two}>
              <p className={s.text_one}>Total Sales:</p>
              <p className={s.text_two}>34.53 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistCards;
