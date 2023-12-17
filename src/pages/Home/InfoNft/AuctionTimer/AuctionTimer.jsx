import s from './AuctionTimer.module.css';

const AuctionTimer = () => {
  return (
    <>
      <div className={s.container}>
        <p className={s.title}>Auction ends in:</p>
        <div className={s.block}>
          <div className={s.box}>
            <h3 className={s.num}>59</h3>
            <p className={s.time}>Hours</p>
          </div>
          <h4 className={s.colon}>:</h4>
          <div className={s.box}>
            <h3 className={s.num}>59</h3>
            <p className={s.time}>Minutes</p>
          </div>
          <h4 className={s.colon}>:</h4>
          <div className={s.box}>
            <h3 className={s.num}>59</h3>
            <p className={s.time}>Seconds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionTimer;
