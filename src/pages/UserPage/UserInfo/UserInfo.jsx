import { Link } from 'react-router-dom';
import s from './UserInfo.module.css';
import { myContext } from '../../../context/Context';

const UserInfo = ({ userData }) => {
  const { userPage } = myContext();
  const userInfoData = userPage[0];

  const userDataKeys = Object.keys(userData);

  return (
    <>
      <section className={s.section}>
        <div className={s.container_one}>
          <h2 className={s.title}>{userData.nickName}</h2>
          <div className={s.block_one}>
            <h5 className={s.subtitle}>{userDataKeys[11]}</h5>
            <p className={s.text}>{userData.bio}</p>
          </div>
          <div className={s.block_two}>
            <h5 className={s.subtitle}>{userDataKeys[13]}</h5>
            <div className={s.box}>
              {userData.links.map((link) => (
                <a
                  className={s.link}
                  key={link.id}
                  href={link.link}
                  target="_blank"
                >
                  <img className={s.img} src={link.imgSrc} alt={link.imgAlt} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={s.container_two}>
          <Link className={s.link_btn} to={''}>
            <img src={userInfoData.btnSrc} alt={userInfoData.btnAlt} />
            {userInfoData.btnText}
          </Link>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
