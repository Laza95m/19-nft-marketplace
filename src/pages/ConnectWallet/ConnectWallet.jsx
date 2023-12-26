import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import s from './ConnectWallet.module.css';
import WalletOptions from './WalletOptions/WalletOptions';
import Loader from '../../components/Loader/Loader';

const ConnectWallet = () => {
  const { isLoadingConnectWallet, getConnectWalletData, connectWalletData } =
    myContext();

  useEffect(() => {
    getConnectWalletData();
  }, []);

  return (
    <>
      {isLoadingConnectWallet && !connectWalletData ? (
        <Loader />
      ) : (
        <section className={s.section}>
          <div className={s.block_one}>
            <div
              className={s.box_one}
              style={{ backgroundImage: `url(${connectWalletData.imgUrl})` }}
            ></div>
          </div>
          <div className={s.block_two}>
            <div className={s.box_two}>
              <h2 className={s.title}>{connectWalletData.title}</h2>
              <p className={s.subtitle}>{connectWalletData.subtitle}</p>
            </div>
            <WalletOptions />
          </div>
        </section>
      )}
    </>
  );
};

export default ConnectWallet;
