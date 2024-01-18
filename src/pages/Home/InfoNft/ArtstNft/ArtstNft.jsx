import { Link } from 'react-router-dom';
import s from './ArtstNft.module.css';
import { myContext } from '../../../../context/Context';

const ArtstNft = ({ nftUsers }) => {
  const { infoNftData } = myContext();
  const artstNftData = infoNftData[0];

  return (
    <>
      {artstNftData && nftUsers && (
        <div className={s.container}>
          <Link className={s.block_one} to={`user-page/${nftUsers.id}`}>
            <img
              className={s.userImg}
              src={nftUsers.primarySrc}
              alt={nftUsers.primaryAlt}
            />
            <p className={s.userName}>{nftUsers.nickName}</p>
          </Link>
          <h2 className={s.title}>{nftUsers.nfts[0].nftName}</h2>
          <div className={s.block_two}>
            <Link className={s.link} to={'/marketplace'}>
              <img
                className={s.iconImg}
                src={artstNftData.btnSrc}
                alt={artstNftData.btnAlt}
              />
              <p className={s.text}>{artstNftData.btnText}</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtstNft;
