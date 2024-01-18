import { Link } from 'react-router-dom';
import { myContext } from '../../../../context/Context';
import s from './Highlighted.module.css';

const Highlighted = () => {
  const { usersData } = myContext();

  const user = usersData?.[0];
  const nft = user?.nfts[0];

  return (
    <>
      {!!usersData && (
        <div className={s.container} to={`/nft/${nft.id}`}>
          <Link className={s.block_one} to={`/nft/${nft.id}`}>
            <img className={s.img} src={nft.nftSrc} alt={nft.nftAlt} />
          </Link>
          <div className={s.block_two}>
            <h5 className={s.title}>{nft.nftName}</h5>
            <Link className={s.box} to={`user-page/${user.id}`}>
              <img
                className={s.userImg}
                src={user.primarySrc}
                alt={user.primaryAlt}
              />
              <p className={s.name}>{user.nickName}</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Highlighted;
