import { useForm } from 'react-hook-form';
import { myContext } from '../../../context/Context';
import s from './FormSignUp.module.css';

const FormSignUp = () => {
  const { signUpData, checkUsersEmailPassword } = myContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    checkUsersEmailPassword(data);
    reset();
  };

  return (
    <>
      {!!signUpData && (
        <form
          className={s.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className={s.block}>
            <label className={s.box}>
              <img
                className={s.img}
                src={signUpData.envelopeSrc}
                alt={signUpData.envelopeAlt}
              />
              <input
                {...register('email')}
                className={s.inp}
                type="email"
                placeholder={signUpData.envelopeText}
              />
            </label>
            {/* {!!errors.email && <p className={s.error}>{errors.email.message}</p>} */}
            <label className={s.box}>
              <img
                className={s.img}
                src={signUpData.lockKeySrc}
                alt={signUpData.lockKeyAlt}
              />
              <input
                {...register('password')}
                className={s.inp}
                type="password"
                placeholder={signUpData.lockKeyFirstText}
              />
            </label>
            {/* {!!errors.password && (
            <p className={s.error}>{errors.password.message}</p>
            )} */}
          </div>
          <button className={s.inpSub} type="submit">
            NEXT
          </button>
        </form>
      )}
    </>
  );
};

export default FormSignUp;
