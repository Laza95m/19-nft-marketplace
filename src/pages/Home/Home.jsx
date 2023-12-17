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
    </>
  );
};

export default Home;
