import { myContext } from '../../../context/Context';
import CollectionCardRow from './CollectionCardRow/CollectionCardRow';
import HeadlineSection from './HeadlineSection/HeadlineSection';
import s from './TrendingCollection.module.css';

const TrendingCollection = () => {
  const { trendingCollectionData } = myContext();

  return (
    <>
      {!!trendingCollectionData && (
        <section className={s.section}>
          <HeadlineSection />
          <CollectionCardRow />
        </section>
      )}
    </>
  );
};

export default TrendingCollection;
