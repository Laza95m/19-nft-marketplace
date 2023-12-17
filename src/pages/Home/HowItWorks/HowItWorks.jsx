import Cards from './Cards/Cards';
import HeadlineSection from './HeadlineSection/HeadlineSection';
import s from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <>
      <section className={s.section}>
        <HeadlineSection />
        <Cards />
      </section>
    </>
  );
};

export default HowItWorks;
