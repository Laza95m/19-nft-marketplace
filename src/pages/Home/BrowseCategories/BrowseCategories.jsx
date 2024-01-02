import { myContext } from '../../../context/Context';
import s from './BrowseCategories.module.css';
import CategoryCards from './CategoryCards/CategoryCards';
import HeadlineSection from './HeadlineSection/HeadlineSection';

const BrowseCategories = () => {
  const { browseCategoriesData } = myContext();

  return (
    <>
      {!!browseCategoriesData && (
        <section className={s.section}>
          <HeadlineSection />
          <CategoryCards />
        </section>
      )}
    </>
  );
};

export default BrowseCategories;
