import s from './UserInfo.module.css';

const UserInfo = ({ userData }) => {
  const userDataKeys = Object.keys(userData);

  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>{userData.nickName}</h2>
        <div className={s.block_one}>
          <h5 className={s.subtitle}>{userDataKeys[11]}</h5>
          <p className={s.text}>{userData.bio}</p>
        </div>
        <div className={s.block_two}>
          <h5 className={s.subtitle}>{userDataKeys[13]}</h5>
          <div className={s.box}>
            {userData.links.map((link) => (
              <a className={s.link} key={link.id} href={link.link}>
                <img className={s.img} src={link.imgSrc} alt={link.imgAlt} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
