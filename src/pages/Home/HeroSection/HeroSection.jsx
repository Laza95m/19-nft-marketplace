import HeroInfo from './HeroInfo/HeroInfo';
import s from './HeroSection.module.css';
import Highlighted from './Highlighted/Highlighted';

const HeroSection = () => {
  return (
    <>
      <section className={s.section}>
        <HeroInfo />
        <Highlighted />
      </section>
    </>
  );
};

export default HeroSection;
