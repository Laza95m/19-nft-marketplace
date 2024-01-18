import { myContext } from '../../../context/Context';
import s from './Headline.module.css';

const Headline = () => {
  const { searchNft, onChangeSearchNft } = myContext();
  
  return (
    <>
      <section className={s.section}>
        <div className={s.container}>
          <div className={s.block_one}>
            <h2 className={s.title}>Browse Marketplace</h2>
            <p className={s.subtitle}>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          <label className={s.block_two}>
            <input
              value={searchNft}
              onChange={onChangeSearchNft}
              className={s.inp}
              type="text"
              placeholder="Search your favourite NFTs"
            />
            <img
              className={s.img}
              src="/marketplace/MagnifyingGlass.svg"
              alt="broken"
            />
          </label>
        </div>
      </section>
      <hr className={s.line} />
    </>
  );
};

export default Headline;
