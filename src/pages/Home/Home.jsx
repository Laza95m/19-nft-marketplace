import s from './Home.module.css';
import HeroSection from './HeroSection/HeroSection';
import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import Loader from '../../components/Loader/Loader';
import TrendingCollection from './TrendingCollection/TrendingCollection';
import TopRatedArtists from './TopRatedArtists/TopRatedArtists';
import BrowseCategories from './BrowseCategories/BrowseCategories';

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
    resizeHandler,
  } = myContext();

  useEffect(() => {
    getHeroSectionData();
    getTrendingCollectionData();
    getTopRatedArtistsData();
    getBrowseCategoriesData();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <>
      {isLoadingHeroSection ? <Loader /> : <HeroSection />}
      {isLoadingTrendingCollection ? <Loader /> : <TrendingCollection />}
      {isLoadingTopRatedArtists ? <Loader /> : <TopRatedArtists />}
      {isLoadingBrowseCategories ? <Loader /> : <BrowseCategories />}
    </>
  );
};

export default Home;
