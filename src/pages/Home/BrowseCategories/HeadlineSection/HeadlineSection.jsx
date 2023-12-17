import { myContext } from '../../../../context/Context';
import s from './HeadlineSection.module.css';

const HeadlineSection = () => {
  const { browseCategoriesData } = myContext();
  const headlineSectionData = browseCategoriesData[0];

  return (
    <>
      <div className={s.container}>
        {!!headlineSectionData && (
          <>
            <h3 className={s.title}>{headlineSectionData.title}</h3>
          </>
        )}
      </div>
    </>
  );
};

export default HeadlineSection;
