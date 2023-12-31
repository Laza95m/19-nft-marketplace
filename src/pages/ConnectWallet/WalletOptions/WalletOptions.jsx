import { myContext } from '../../../context/Context';
import s from './WalletOptions.module.css';

const WalletOptions = () => {
  const { connectWalletData } = myContext();
  const walletOptionsData = connectWalletData.links;

  return (
    <>
      <div className={s.container}>
        {!!walletOptionsData &&
          walletOptionsData.map((el) => (
            <a key={el.id} className={s.link} href={el.href} target="_blank">
              <img className={s.img} src={el.iconSrc} alt={el.iconAlt} />
              <h5 className={s.text}>{el.text}</h5>
            </a>
          ))}
      </div>
    </>
  );
};

export default WalletOptions;
