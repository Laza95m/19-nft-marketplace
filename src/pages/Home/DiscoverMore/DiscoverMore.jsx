import Cards from './Cards/Cards';
import s from './DiscoverMore.module.css';
import HeadlineSection from './HeadlineSection/HeadlineSection';

const DiscoverMore = () => {
  return (
    <>
      <section className={s.section}>
        <HeadlineSection />
        <Cards />
      </section>
    </>
  );
};

export default DiscoverMore;
