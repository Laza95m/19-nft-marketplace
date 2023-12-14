import s from './BrowseCategories.module.css';
import CategoryCards from './CategoryCards/CategoryCards';
import HeadlineSection from './HeadlineSection/HeadlineSection';

const BrowseCategories = () => {
  return (
    <>
      <section className={s.section}>
        <HeadlineSection />
        <CategoryCards />
      </section>
    </>
  );
};

export default BrowseCategories;
