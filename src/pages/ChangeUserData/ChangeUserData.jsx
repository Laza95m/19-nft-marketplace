import { useParams } from 'react-router-dom';
import s from './ChangeUserData.module.css';
import { myContext } from '../../context/Context';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { useForm } from 'react-hook-form';

const ChangeUserData = () => {
  const {
    isLoadingUserDataById,
    userDataById,
    getUserDataById,
    getUserPage,
    putUserById,
    validFullname,
    validEmail,
    validPhone,
    validPassword,
    validUserImg,
    validNickName,
    validBio,
  } = myContext();

  const { id } = useParams();

  const nfts = userDataById?.nfts;

  useEffect(() => {
    getUserDataById(id);
    getUserPage();
  }, [id]);

  useEffect(() => {
    if (!!userDataById) {
      setValue('userImg', userDataById.primarySrc);
      setValue('fullname', userDataById.fullName);
      setValue('email', userDataById.email);
      setValue('phone', userDataById.phone);
      setValue('nickName', userDataById.nickName);
      setValue('bio', userDataById.bio);
      setValue('password', userDataById.password);
    }
  }, [userDataById]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    putUserById(id, data, nfts);
  };

  return (
    <>
      {isLoadingUserDataById && <Loader />}
      {!!userDataById && (
        <section className={s.section}>
          <div className={s.block}>
            <img
              className={s.img}
              src={userDataById.primarySrc || '/userPage/user.svg'}
              alt={userDataById.primaryAlt}
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <label className={s.label}>
              UserImg
              <input
                {...register('userImg', validUserImg)}
                className={s.input}
                type="text"
                placeholder="asdsadas"
              />
            </label>
            {!!errors.userImg && (
              <p className={s.error}>{errors.userImg.message}</p>
            )}

            <label className={s.label}>
              FullName
              <input
                {...register('fullname', validFullname)}
                className={s.input}
                type="text"
              />
            </label>
            {!!errors.fullname && (
              <p className={s.error}>{errors.fullname.message}</p>
            )}

            <label className={s.label}>
              Email
              <input
                {...register('email', validEmail)}
                className={s.input}
                type="email"
              />
            </label>
            {!!errors.email && (
              <p className={s.error}>{errors.email.message}</p>
            )}

            <label className={s.label}>
              Phone
              <input
                {...register('phone', validPhone)}
                className={s.input}
                type="tel"
              />
            </label>
            {!!errors.phone && (
              <p className={s.error}>{errors.phone.message}</p>
            )}

            <label className={s.label}>
              NickName
              <input
                {...register('nickName', validNickName)}
                className={s.input}
                type="text"
              />
            </label>
            {!!errors.nickName && (
              <p className={s.error}>{errors.nickName.message}</p>
            )}

            <label className={s.label}>
              Bio
              <input
                {...register('bio', validBio)}
                className={s.input}
                type="bio"
              />
            </label>
            {!!errors.bio && <p className={s.error}>{errors.bio.message}</p>}

            <label className={s.label}>
              Password
              <input
                {...register('password', validPassword)}
                className={s.input}
                type="password"
              />
            </label>
            {!!errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}

            <button className={s.submit} type="submit">
              Change
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default ChangeUserData;
