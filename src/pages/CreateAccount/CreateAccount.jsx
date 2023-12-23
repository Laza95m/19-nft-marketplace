import s from './CreateAccount.module.css';
import FormCreate from './FormCreate/FormCreate';

const CreateAccount = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.block_one} style={{backgroundImage:`url(/createAccount/main.png)`}}></div>
        <div className={s.block_two}>
          <div className={s.box}>
            <h2 className={s.title}>Create account</h2>
            <p className={s.subtitle}>
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
          <FormCreate />
        </div>
      </section>
    </>
  );
};

export default CreateAccount;
