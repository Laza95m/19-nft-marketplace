import { myContext } from '../../../../context/Context';
import s from './CategoryCards.module.css';

const CategoryCards = () => {
  const { browseCategoriesData } = myContext();
  const categoryCardsData = browseCategoriesData[1];

  return (
    <>
      <div className={s.container}>
        {categoryCardsData?.map((el) => (
          <div key={el.id} className={s.block}>
            <div className={s.content}>
              <div
                style={{
                  backgroundImage: `url(${el.placeholderSrc})`,
                }}
                className={s.box_one}
              ></div>
            </div>
            <div className={s.box_two}>
              <img className={s.img} src={el.iconSrc} alt={el.iconAlt} />
            </div>
            <div className={s.box_three}>
              <h5 className={s.title}>{el.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryCards;
