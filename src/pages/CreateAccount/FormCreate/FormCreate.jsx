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
            <label className={s.box}>
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
            </label>
            {!!errors.fullname && (
              <p className={s.error}>{errors.fullname.message}</p>
            )}
            <label className={s.box}>
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
            </label>
            {!!errors.email && (
              <p className={s.error}>{errors.email.message}</p>
            )}
            <label className={s.box}>
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
            </label>
            {!!errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <label className={s.box}>
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
            </label>
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
