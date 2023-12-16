import { Link } from 'react-router-dom';
import s from './ArtstNft.module.css';

const ArtstNft = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.block_one}>
          <img
            className={s.userImg}
            src="userProfiles/user_1/userImg.png"
            alt="broken"
          />
          <p className={s.userName}>Keepitreal</p>
        </div>
        <h2 className={s.title}>Distant Galaxy</h2>
        <div className={s.block_two}>
          <Link className={s.link} to={''}>
            <img
              className={s.iconImg}
              src="/discoverMore/eye.svg"
              alt="broken"
            />
            <p className={s.text}>See NFT</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArtstNft;
