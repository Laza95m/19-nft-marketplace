import { myContext } from '../../../../context/Context';
import s from './ImageSection.module.css';

const ImageSection = () => {
  const { subscribeWidgetData } = myContext();
  const imageSectionData = subscribeWidgetData[0];

  return (
    <>
      {!!imageSectionData && (
        <div
          className={s.block}
          style={{
            backgroundImage: `url(${imageSectionData.imgUrl})`,
          }}
        ></div>
      )}
    </>
  );
};

export default ImageSection;
