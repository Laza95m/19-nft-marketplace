import CollectionCardRow from './CollectionCardRow/CollectionCardRow';
import HeadlineSection from './HeadlineSection/HeadlineSection';
import s from './TrendingCollection.module.css';

const TrendingCollection = () => {
  return (
    <>
      <section className={s.section}>
        <HeadlineSection />
        <CollectionCardRow />
      </section>
    </>
  );
};

export default TrendingCollection;
