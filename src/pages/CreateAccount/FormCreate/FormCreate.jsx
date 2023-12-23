import s from './FormCreate.module.css';

const FormCreate = () => {
  return (
    <>
      <form className={s.form} autoComplete="off">
        <div className={s.block}>
          <div className={s.box}>
            <img
              className={s.img}
              src="/public/createAccount/user.svg"
              alt=""
            />
            <input className={s.inp} type="text" placeholder="Username" />
          </div>
          <div className={s.box}>
            <img
              className={s.img}
              src="/public/createAccount/envelope.svg"
              alt=""
            />
            <input className={s.inp} type="email" placeholder="Email Address" />
          </div>
          <div className={s.box}>
            <img
              className={s.img}
              src="/public/createAccount/lockKey.svg"
              alt=""
            />
            <input className={s.inp} type="password" placeholder="Password" />
          </div>
          <div className={s.box}>
            <img
              className={s.img}
              src="/public/createAccount/lockKey.svg"
              alt=""
            />
            <input
              className={s.inp}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <input className={s.inpSub} type="submit" value={'Create account'} />
      </form>
    </>
  );
};

export default FormCreate;
