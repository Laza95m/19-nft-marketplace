import ArtstNft from './ArtstNft/ArtstNft';
import s from './InfoNft.module.css';

const InfoNft = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(/userProfiles/user_1/nfts/nft_1.png)` }}
        className={s.section}
      >
        <div className={s.container}>
          <div className={s.block}>
            <ArtstNft />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoNft;
