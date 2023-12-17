import { myContext } from '../../../../context/Context';
import s from './Cards.module.css';

const Cards = () => {
  const { howItWorksData } = myContext();
  const cardsData = howItWorksData[1];

  return (
    <>
      <div className={s.container}>
        {!!cardsData &&
          cardsData.map((el) => (
            <div key={el.id} className={s.block}>
              <img className={s.img} src={el.imgSrc} alt={el.imgAlt} />
              <div className={s.box}>
                <h5 className={s.title}>{el.title}</h5>
                <p className={s.description}>{el.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
