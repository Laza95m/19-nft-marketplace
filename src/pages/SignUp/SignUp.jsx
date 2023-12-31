import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import FormSignUp from './FormSignUp/FormSignUp';
import s from './SignUp.module.css';
import Loader from '../../components/Loader/Loader';

const SignUp = () => {
  const { isLoadingSignUp, signUpData, getSignUpData, getUsersData } =
    myContext();

  useEffect(() => {
    getSignUpData();
    getUsersData();
  }, []);

  return (
    <>
      {!!isLoadingSignUp && !!signUpData ? (
        <Loader />
      ) : (
        <section className={s.section}>
          <div className={s.block_one}>
            <div
              className={s.box_one}
              style={{ backgroundImage: `url(${signUpData.imgUrl})` }}
            ></div>
          </div>
          <div className={s.block_two}>
            <div className={s.box_two}>
              <h2 className={s.title}>{signUpData.title}</h2>
              <p className={s.subtitle}>{signUpData.subtitle}</p>
            </div>
            <FormSignUp />
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
