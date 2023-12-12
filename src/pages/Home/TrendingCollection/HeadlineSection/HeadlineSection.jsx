import { myContext } from '../../../../context/Context';
import s from './HeadlineSection.module.css';

const HeadlineSection = () => {
  const { trendingCollectionData } = myContext();
  const headlineSectionData = trendingCollectionData[0];

  return (
    <>
      {headlineSectionData && (
        <div className={s.container}>
          <h3 className={s.title}>{headlineSectionData.title}</h3>
          <p className={s.subtitle}>{headlineSectionData.subtitle}</p>
        </div>
      )}
    </>
  );
};

export default HeadlineSection;
