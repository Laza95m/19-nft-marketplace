import s from './ImagePlaceHolder.module.css';

const ImagePlaceHolder = ({ userData }) => {
  const nft = userData.nfts[0].nftSrc;

  return (
    <>
      <section
        style={{ backgroundImage: `url(${nft})` }}
        className={s.section}
      ></section>
    </>
  );
};

export default ImagePlaceHolder;
