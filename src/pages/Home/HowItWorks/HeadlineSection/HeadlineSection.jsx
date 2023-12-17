import { myContext } from '../../../../context/Context';
import s from './HeadlineSection.module.css';

const HeadlineSection = () => {
  const { howItWorksData } = myContext();
  const headlineSectionData = howItWorksData[0];

  return (
    <>
      {!!headlineSectionData && (
        <div className={s.container}>
          <h3 className={s.title}>{headlineSectionData.title}</h3>
          <p className={s.subtitle}>{headlineSectionData.subtitle}</p>
        </div>
      )}
    </>
  );
};

export default HeadlineSection;
