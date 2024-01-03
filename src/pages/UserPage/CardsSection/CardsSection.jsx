import { myContext } from '../../../context/Context';
import s from './CardsSection.module.css';

const CardsSection = ({ userData }) => {
  const { getObjectKeys, wordSearch } = myContext();

  const nftsUser = userData.nfts;

  const userDataKeys = getObjectKeys(nftsUser[0]);
  const priceText = wordSearch(userDataKeys, 'price');
  const highestBidText = wordSearch(userDataKeys, 'highestBid');

  return (
    <>
      <section className={s.section}>
        <div className={s.container}>
          {!!userData &&
            nftsUser.map((el) => (
              <div key={el.id} className={s.block}>
                <img className={s.nftImg} src={el.nftSrc} alt={el.nftAlt} />
                <div className={s.box}>
                  <div className={s.content_one}>
                    <h5 className={s.title}>{el.nftName}</h5>
                    <div className={s.holder}>
                      <img
                        className={s.userImg}
                        src={userData.primarySrc}
                        alt={userData.primaryAlt}
                      />
                      <p className={s.name}>{userData.nickName}</p>
                    </div>
                  </div>
                  <div className={s.content_two}>
                    <div className={s.holder_one}>
                      <p className={s.title}>{priceText}</p>
                      <p className={s.price}>{el.price} ETH</p>
                    </div>
                    <div className={s.holder_two}>
                      <p className={s.title}>{highestBidText}</p>
                      <p className={s.price}>{el.highestBid} ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default CardsSection;
