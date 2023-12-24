import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import s from './CreateAccount.module.css';
import FormCreate from './FormCreate/FormCreate';
import Loader from '../../components/Loader/Loader';

const CreateAccount = () => {
  const {
    isLoadingCreateAccount,
    getCreateAccountData,
    createAccountData,
    getUsersData,
  } = myContext();

  useEffect(() => {
    getCreateAccountData();
    getUsersData();
  }, []);

  return (
    <>
      {isLoadingCreateAccount && !createAccountData ? (
        <Loader />
      ) : (
        <section className={s.section}>
          <div className={s.block_one}>
            <div
              className={s.box_one}
              style={{ backgroundImage: `url(${createAccountData.imgUrl})` }}
            ></div>
          </div>
          <div className={s.block_two}>
            <div className={s.box_two}>
              <h2 className={s.title}>{createAccountData.title}</h2>
              <p className={s.subtitle}>{createAccountData.subtitle}</p>
            </div>
            <FormCreate />
          </div>
        </section>
      )}
    </>
  );
};

export default CreateAccount;
