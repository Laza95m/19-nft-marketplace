import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import Headline from './Headline/Headline';
import s from './Marketplace.module.css';
import MarketTab from './MarketTab/MarketTab';
import NftsCard from './NftsCard/NftsCard';
import Loader from '../../components/Loader/Loader';

const Marketplace = () => {
  const { nftsData, getNftsData, isLoadingNftsData } = myContext();

  useEffect(() => {
    getNftsData();
  }, []);

  return (
    <>
      {isLoadingNftsData && <Loader />}
      {!!nftsData && <Headline />}
      {!!nftsData && <MarketTab nftsData={nftsData} />}
      {!!nftsData && <NftsCard nftsData={nftsData} />}
      {/* {isLoadingHeroSection ? <Loader /> : <HeroSection />} */}
    </>
  );
};

export default Marketplace;
