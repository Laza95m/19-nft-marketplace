import { myContext } from '../../../../context/Context';
import s from './ArtistCards.module.css';

const ArtistCards = () => {
  const { TopRatedArtistsData, size } = myContext();
  let { TopRatedArtistsUsers } = myContext();

  // if (size <= 1009)
  //   TopRatedArtistsUsers = TopRatedArtistsUsers.filter((el) => el.id < 7);
  // if (size <= 760)
  //   TopRatedArtistsUsers = TopRatedArtistsUsers.filter((el) => el.id < 6);

  return (
    <>
      <div className={s.container}>
        {!!TopRatedArtistsUsers &&
          TopRatedArtistsUsers.map((el) => (
            <div key={el.id} className={s.block}>
              <div className={s.content_one}>
                <div className={s.box_one}>
                  <p className={s.number}>{el.id}</p>
                </div>
                <img
                  className={s.img}
                  src={el.primarySrc}
                  alt={el.primaryAlt}
                />
              </div>
              <div className={s.content_two}>
                <h5 className={s.title}>{el.nickName}</h5>
                <div className={s.box_two}>
                  <p className={s.text_one}>{TopRatedArtistsData[1].text}</p>
                  <p className={s.text_two}>
                    {el.totalSale}
                    {TopRatedArtistsData[1].currency}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ArtistCards;
