import { Link } from 'react-router-dom';
import { myContext } from '../../../../context/Context';
import s from './ArtistCards.module.css';

const ArtistCards = () => {
  const { usersData } = myContext();

  return (
    <>
      <div className={s.container}>
        {!!usersData &&
          usersData.map((el) => (
            <Link key={el.id} className={s.block} to={`/user-page/${el.id}`}>
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
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default ArtistCards;
