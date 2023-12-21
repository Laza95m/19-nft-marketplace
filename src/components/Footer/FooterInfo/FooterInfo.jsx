import Explore from './Explore/Explore';
import s from './FooterInfo.module.css';
import MarketplaceInfo from './MarketplaceInfo/MarketplaceInfo';

const FooterInfo = () => {
  return (
    <>
      <div className={s.container}>
        <MarketplaceInfo />
        <Explore />
      </div>
    </>
  );
};

export default FooterInfo;
