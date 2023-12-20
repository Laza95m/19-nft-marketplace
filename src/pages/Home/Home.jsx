import s from './Home.module.css';
import HeroSection from './HeroSection/HeroSection';
import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import Loader from '../../components/Loader/Loader';
import TrendingCollection from './TrendingCollection/TrendingCollection';
import TopRatedArtists from './TopRatedArtists/TopRatedArtists';
import BrowseCategories from './BrowseCategories/BrowseCategories';
import DiscoverMore from './DiscoverMore/DiscoverMore';
import InfoNft from './InfoNft/InfoNft';
import HowItWorks from './HowItWorks/HowItWorks';
import SubscribeWidget from './SubscribeWidget/SubscribeWidget';

const Home = () => {
  const {
    getHeroSectionData,
    isLoadingHeroSection,
    getTrendingCollectionData,
    isLoadingTrendingCollection,
    getTopRatedArtistsData,
    isLoadingTopRatedArtists,
    getBrowseCategoriesData,
    isLoadingBrowseCategories,
    isLoadingDiscoverMore,
    getDiscoverMoreData,
    isLoadingInfoNft,
    getInfoNftData,
    isLoadingHowItWorks,
    getHowItWorksData,
    isLoadingSubscribeWidget,
    getSubscribeWidgetData,
    resizeHandler,
  } = myContext();

  useEffect(() => {
    getHeroSectionData();
    getTrendingCollectionData();
    getTopRatedArtistsData();
    getBrowseCategoriesData();
    getDiscoverMoreData();
    getInfoNftData();
    getHowItWorksData();
    getSubscribeWidgetData();
  }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', resizeHandler);
  //   resizeHandler();

  //   return () => {
  //     window.removeEventListener('resize', resizeHandler);
  //   };
  // }, []);

  return (
    <>
      {isLoadingHeroSection ? <Loader /> : <HeroSection />}
      {isLoadingTrendingCollection ? <Loader /> : <TrendingCollection />}
      {isLoadingTopRatedArtists ? <Loader /> : <TopRatedArtists />}
      {isLoadingBrowseCategories ? <Loader /> : <BrowseCategories />}
      {isLoadingDiscoverMore ? <Loader /> : <DiscoverMore />}
      {isLoadingInfoNft ? <Loader /> : <InfoNft />}
      {isLoadingHowItWorks ? <Loader /> : <HowItWorks />}
      {isLoadingSubscribeWidget ? <Loader /> : <SubscribeWidget />}
    </>
  );
};

export default Home;
