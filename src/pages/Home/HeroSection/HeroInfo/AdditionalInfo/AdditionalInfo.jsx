import { myContext } from '../../../../../context/Context';
import s from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  const { heroSectionData } = myContext();
  const additionalInfo = heroSectionData[0]?.additionalInfo;

  return (
    <>
      <div className={s.container}>
        {!!additionalInfo &&
          additionalInfo.map((el) => (
            <div key={el.id} className={s.block}>
              <h4 className={s.title}>{el.title}</h4>
              <p className={s.subtitle}>{el.subtitle}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default AdditionalInfo;
