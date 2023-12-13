import s from './Home.module.css';
import HeroSection from './HeroSection/HeroSection';
import { useEffect } from 'react';
import { myContext } from '../../context/Context';
import Loader from '../../components/Loader/Loader';
import TrendingCollection from './TrendingCollection/TrendingCollection';
import TopRatedArtists from './TopRatedArtists/TopRatedArtists';

const Home = () => {
  const {
    getHeroSectionData,
    isLoadingHeroSection,
    getTrendingCollectionData,
    isLoadingTrendingCollection,
    getTopRatedArtistsData,
    isLoadingTopRatedArtists,
  } = myContext();

  useEffect(() => {
    getHeroSectionData();
    getTrendingCollectionData();
    getTopRatedArtistsData();
  }, []);

  return (
    <>
      {isLoadingHeroSection ? <Loader /> : <HeroSection />}
      {isLoadingTrendingCollection ? <Loader /> : <TrendingCollection />}
      {isLoadingTopRatedArtists ? <Loader /> : <TopRatedArtists />}
    </>
  );
};

export default Home;
