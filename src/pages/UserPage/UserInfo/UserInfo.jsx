import { Link } from 'react-router-dom';
import s from './UserInfo.module.css';
import { myContext } from '../../../context/Context';

const UserInfo = ({ userData }) => {
  const { userPage, getObjectKeys, wordSearch } = myContext();
  const userInfoData = userPage?.[0].btns;
  const userDataKeys = getObjectKeys(userData);

  const bioText = wordSearch(userDataKeys, 'bio');
  const linksText = wordSearch(userDataKeys, 'links');

  return (
    <>
      {!!userPage && (
        <>
          <section className={s.section}>
            <div className={s.container_one}>
              <h2 className={s.title}>{userData.nickName}</h2>
              <div className={s.block_one}>
                <h5 className={s.subtitle}>{bioText}</h5>
                <p className={s.text}>{userData.bio}</p>
              </div>
              <div className={s.block_two}>
                <h5 className={s.subtitle}>{linksText}</h5>
                <div className={s.box}>
                  {userData.links.map((link) => (
                    <a
                      className={s.link}
                      key={link.id}
                      href={link.link}
                      target="_blank"
                    >
                      <img
                        className={s.img}
                        src={link.imgSrc}
                        alt={link.imgAlt}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.container_two}>
              {userInfoData.map((el) => (
                <Link
                  key={el.id}
                  className={s.link_btn}
                  to={el.link + userData.id}
                >
                  <img src={el.src} alt={el.alt} />
                  {el.text}
                </Link>
              ))}
            </div>
          </section>
          <hr className={s.line} />
        </>
      )}
    </>
  );
};

export default UserInfo;
