import HeroInfo from './HeroInfo/HeroInfo';
import s from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <>
      <section className={s.section}>
        <HeroInfo />
      </section>
    </>
  );
};

export default HeroSection;
