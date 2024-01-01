import s from './ProfileImage.module.css';

const ProfileImage = ({ userData }) => {
  console.log(userData);

  return (
    <>
      {!!userData && (
        <section
          style={{
            backgroundImage: `url(${userData.backgroundImage})`,
          }}
          className={s.section}
        >
          <div className={s.container}>
            <div className={s.block}>
              <img
                className={s.img}
                src={userData.primarySrc}
                alt={userData.primaryAlt}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProfileImage;
