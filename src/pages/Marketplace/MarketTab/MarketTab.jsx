import s from './MarketTab.module.css';

const MarketTab = ({ nftsData }) => {
  const nftsCount = nftsData.length;

  return (
    <>
      <section className={s.section}>
        <h5 className={s.subtitle}>NFTs</h5>
        <div className={s.block}>
          <p className={s.count}>{nftsCount}</p>
        </div>
      </section>
    </>
  );
};

export default MarketTab;
