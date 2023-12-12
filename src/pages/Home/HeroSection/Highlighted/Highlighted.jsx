import { myContext } from '../../../../context/Context';
import s from './Highlighted.module.css';

const Highlighted = () => {
  const { heroSectionData } = myContext();
  const highlightedData = heroSectionData[1];

  return (
    <>
      {highlightedData && (
        <div className={s.container}>
          <div className={s.block_one}>
            <img
              className={s.img}
              src={highlightedData.imgSrc}
              alt={highlightedData.Alt}
            />
          </div>
          <div className={s.block_two}>
            <h5 className={s.title}>{highlightedData.title}</h5>
            <div className={s.box}>
              <img
                className={s.userImg}
                src={highlightedData.userSrc}
                alt={highlightedData.userAlt}
              />
              <p className={s.name}>{highlightedData.userName}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Highlighted;
