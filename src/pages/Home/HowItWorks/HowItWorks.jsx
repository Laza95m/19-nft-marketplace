import { myContext } from '../../../context/Context';
import Cards from './Cards/Cards';
import HeadlineSection from './HeadlineSection/HeadlineSection';
import s from './HowItWorks.module.css';

const HowItWorks = () => {
  const { howItWorksData } = myContext();

  return (
    <>
      {!!howItWorksData && (
        <section className={s.section}>
          <HeadlineSection />
          <Cards />
        </section>
      )}
    </>
  );
};

export default HowItWorks;
