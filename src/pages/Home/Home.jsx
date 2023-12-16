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
    resizeHandler,
  } = myContext();

  useEffect(() => {
    getHeroSectionData();
    getTrendingCollectionData();
    getTopRatedArtistsData();
    getBrowseCategoriesData();
    getDiscoverMoreData();
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
      <InfoNft />
    </>
  );
};

export default Home;
