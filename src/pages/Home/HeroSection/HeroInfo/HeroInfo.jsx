import { Link } from 'react-router-dom';
import s from './HeroInfo.module.css';
import { myContext } from '../../../../context/Context';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';

const HeroInfo = () => {
  const { heroSectionData } = myContext();
  const heroInfoData = heroSectionData[0];

  return (
    <>
      <div className={s.container}>
        {!!heroInfoData && (
          <>
            <h1 className={s.title}>{heroInfoData.title}</h1>
            <p className={s.description}>{heroInfoData.subtitle}</p>
            <ul className={s.btn}>
              <li>
                <Link to={heroInfoData.link}>
                  <img src={heroInfoData.btnSrc} alt={heroInfoData.btnAlt} />
                  {heroInfoData.btnText}
                </Link>
              </li>
            </ul>
          </>
        )}
        <AdditionalInfo />
      </div>
    </>
  );
};

export default HeroInfo;
