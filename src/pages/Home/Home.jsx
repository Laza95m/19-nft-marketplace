import s from './Home.module.css';
import HeroSection from './HeroSection/HeroSection';
import { useEffect } from 'react';
import { myContext } from '../../context/Context';

const Home = () => {
  const { getHeroSectionData } = myContext();

  useEffect(() => {
    getHeroSectionData();
    console.log('Home');
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
