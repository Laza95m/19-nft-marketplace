import { myContext } from '../../../context/Context';
import Cards from './Cards/Cards';
import s from './DiscoverMore.module.css';
import HeadlineSection from './HeadlineSection/HeadlineSection';

const DiscoverMore = () => {
  const { discoverMoreData } = myContext();

  return (
    <>
      {!!discoverMoreData && (
        <section className={s.section}>
          <HeadlineSection />
          <Cards />
        </section>
      )}
    </>
  );
};

export default DiscoverMore;
