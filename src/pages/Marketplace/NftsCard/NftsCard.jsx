import { Link } from 'react-router-dom';
import s from './NftsCard.module.css';
import { myContext } from '../../../context/Context';

const NftsCard = ({ nftsData }) => {
  const { searchNft } = myContext();

  return (
    <>
      <section className={s.section}>
        <div className={s.container}>
          {nftsData
            .filter((obj) => {
              return obj.nftName
                .toLowerCase()
                .includes(searchNft.toLowerCase());
            })
            .map((el) => (
              <div key={el.id} className={s.block}>
                <Link className={s.link} to={`../nft/${el.id}`}>
                  <img className={s.nftImg} src={el.nftSrc} alt="broken_img" />
                </Link>
                <div className={s.box}>
                  <div className={s.content_one}>
                    <h5 className={s.title}>{el.nftName}</h5>
                    <Link
                      className={s.holder}
                      to={`../user-page/${el.user.id}`}
                    >
                      <img
                        className={s.userImg}
                        src={el.user.primarySrc}
                        alt={el.user.primaryAlt}
                      />
                      <p className={s.name}>{el.user.nickName}</p>
                    </Link>
                  </div>
                  <div className={s.content_two}>
                    <div className={s.holder_one}>
                      <p className={s.title}>Price</p>
                      <p className={s.price}>{el.price} ETH</p>
                    </div>
                    <div className={s.holder_two}>
                      <p className={s.title}>Highest Bid</p>
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

export default NftsCard;
