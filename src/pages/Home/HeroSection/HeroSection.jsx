import { myContext } from '../../../context/Context';
import HeroInfo from './HeroInfo/HeroInfo';
import s from './HeroSection.module.css';
import Highlighted from './Highlighted/Highlighted';

const HeroSection = () => {
  const { heroSectionData } = myContext();

  return (
    <>
      {!!heroSectionData && (
        <section className={s.section}>
          <HeroInfo />
          <Highlighted />
        </section>
      )}
    </>
  );
};

export default HeroSection;
