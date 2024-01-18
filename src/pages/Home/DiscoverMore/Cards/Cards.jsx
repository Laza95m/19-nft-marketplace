import { Link } from 'react-router-dom';
import { myContext } from '../../../../context/Context';
import s from './Cards.module.css';

const Cards = () => {
  const { discoverMoreData, discoverMoreUsers } = myContext();
  const cardsData = discoverMoreData[1];
  const cardsUsers = discoverMoreUsers.filter((el) => el.id < 4);

  return (
    <>
      <div className={s.container}>
        {!!cardsUsers &&
          !!cardsData &&
          cardsUsers.map((el) => (
            <div key={el.id} className={s.block}>
              <Link className={s.box_one} to={`nft/${el.id}`}>
                <img
                  className={s.nftImg}
                  src={el.nfts[0].nftSrc}
                  alt={el.nfts[0].nftAlt}
                />
              </Link>

              <div className={s.box}>
                <div className={s.content_one}>
                  <h5 className={s.title}>{el.nfts[0].nftName}</h5>
                  <Link className={s.holder} to={`/user-page/${el.id}`}>
                    <img
                      className={s.userImg}
                      src={el.primarySrc}
                      alt={el.primaryAlt}
                    />
                    <p className={s.name}>{el.nickName}</p>
                  </Link>
                </div>

                <div className={s.content_two}>
                  <div className={s.holder_one}>
                    <p className={s.title}>{cardsData.priceText}</p>
                    <p className={s.price}>
                      {el.nfts[0].price}
                      {cardsData.currency}
                    </p>
                  </div>

                  <div className={s.holder_two}>
                    <p className={s.title}>{cardsData.highestBid}</p>
                    <p className={s.price}>
                      {el.nfts[0].highestBid}
                      {cardsData.currency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
