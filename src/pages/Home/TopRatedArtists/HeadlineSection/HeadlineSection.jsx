import { Link } from 'react-router-dom';
import s from './HeadlineSection.module.css';
import { myContext } from '../../../../context/Context';

const HeadlineSection = () => {
  const { TopRatedArtistsData } = myContext();
  const headlineSectionData = TopRatedArtistsData[0];

  return (
    <>
      {headlineSectionData && (
        <div className={s.container}>
          <div className={s.block_one}>
            <h5 className={s.title}>{headlineSectionData.title}</h5>
            <p className={s.subtitle}>{headlineSectionData.subtitle}</p>
          </div>
          <div className={s.block_two}>
            <ul className={s.btn}>
              <li>
                <Link to={headlineSectionData.link}>
                  <img
                    src={headlineSectionData.btnSrc}
                    alt={headlineSectionData.btnAlt}
                  />
                  {headlineSectionData.btnText}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HeadlineSection;
