import { useEffect } from 'react';
import { myContext } from '../../../../context/Context';
import s from './CollectionCardRow.module.css';

const CollectionCardRow = () => {
  const { trendingCollectionData } = myContext();
  const collectionCardRowData = trendingCollectionData[1];

  console.log(collectionCardRowData);

  return (
    <>
      <div className={s.section}>
        {collectionCardRowData?.map((el) => (
          <div key={el.id} className={s.container}>
            <img
              className={s.primaryImg}
              src={el.primarySrc}
              alt={el.primaryAlt}
            />
            <div className={s.block}>
              <img
                className={s.secondImg}
                src={el.secondSrc}
                alt={el.secondAlt}
              />
              <img className={s.thirdImg} src={el.thirdSrc} alt={el.thirdAlt} />
              <div className={s.box}>
                <h5 className={s.count}>{el.count}</h5>
              </div>
            </div>
            <h5 className={s.title}>{el.title}</h5>
            <div className={s.content}>
              <img className={s.userImg} src={el.userSrc} alt={el.userAlt} />
              <p className={s.name}>{el.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollectionCardRow;
