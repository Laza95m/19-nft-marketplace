import { useForm } from 'react-hook-form';
import { myContext } from '../../../context/Context';
import s from './FormCreate.module.css';

const FormCreate = () => {
  const {
    createAccountData,
    validFullname,
    validEmail,
    validPassword,
    addNewUser,
  } = myContext();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
    addNewUser(data);
    reset();
  };

  const validConfirmPassword = {
    required: 'The password is required',
    minLength: {
      value: 6,
      message: 'minimum length is 6',
    },
    validate: (value) => {
      const { password } = getValues();
      return password === value || 'Passwords should match!';
    },
  };

  return (
    <>
      {!!createAccountData && (
        <form
          className={s.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className={s.block}>
            <div className={s.box}>
              <img
                className={s.img}
                src={createAccountData.userSrc}
                alt={createAccountData.userAlt}
              />
              <input
                {...register('fullname', validFullname)}
                className={s.inp}
                type="text"
                placeholder={createAccountData.userText}
              />
            </div>
            {!!errors.fullname && (
              <p className={s.error}>{errors.fullname.message}</p>
            )}
            <div className={s.box}>
              <img
                className={s.img}
                src={createAccountData.envelopeSrc}
                alt={createAccountData.envelopeAlt}
              />
              <input
                {...register('email', validEmail)}
                className={s.inp}
                type="email"
                placeholder={createAccountData.envelopeText}
              />
            </div>
            {!!errors.email && (
              <p className={s.error}>{errors.email.message}</p>
            )}
            <div className={s.box}>
              <img
                className={s.img}
                src={createAccountData.lockKeySrc}
                alt={createAccountData.lockKeyAlt}
              />
              <input
                {...register('password', validPassword)}
                className={s.inp}
                type="password"
                placeholder={createAccountData.lockKeyFirstText}
              />
            </div>
            {!!errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <div className={s.box}>
              <img
                className={s.img}
                src={createAccountData.lockKeySrc}
                alt={createAccountData.lockKeyAlt}
              />
              <input
                {...register('confirmSecond', validConfirmPassword)}
                className={s.inp}
                type="password"
                placeholder={createAccountData.lockKeySecondText}
              />
            </div>
            {!!errors.confirmSecond && (
              <p className={s.error}>{errors.confirmSecond.message}</p>
            )}
          </div>
          <button className={s.inpSub} type="submit">
            {createAccountData.submitText}
          </button>
        </form>
      )}
    </>
  );
};

export default FormCreate;
