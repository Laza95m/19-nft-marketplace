import s from './AuctionTimer.module.css';
import { myContext } from '../../../../context/Context';
import { memo, useEffect, useState } from 'react';

const AuctionTimer = ({ nftUsers }) => {
  const { infoNftData, ms, calculateTimeRemaining } = myContext();
  const auctionTimerData = infoNftData[1];
  const timerUser = nftUsers.nfts[0].timerHours;
  const days = Math.floor(timerUser / 24);
  const deadline = new Date(Date.now() + timerUser * ms);

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(
      () => calculateTimeRemaining(days, deadline, setTimeRemaining),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!!auctionTimerData && !!timerUser && (
        <div className={s.container}>
          <p className={s.title}>{auctionTimerData.title}</p>
          <div className={s.block}>
            <div className={s.box}>
              <h3 className={s.num}>
                {timeRemaining.hours < 10
                  ? `0${timeRemaining.hours}`
                  : timeRemaining.hours}
              </h3>
              <p className={s.time}>{auctionTimerData.hourText}</p>
            </div>
            <h4 className={s.colon}>{auctionTimerData.colon}</h4>
            <div className={s.box}>
              <h3 className={s.num}>
                {timeRemaining.minutes < 10
                  ? `0${timeRemaining.minutes}`
                  : timeRemaining.minutes}
              </h3>
              <p className={s.time}>{auctionTimerData.minuteText}</p>
            </div>
            <h4 className={s.colon}>{auctionTimerData.colon}</h4>
            <div className={s.box}>
              <h3 className={s.num}>
                {timeRemaining.seconds < 10
                  ? `0${timeRemaining.seconds}`
                  : timeRemaining.seconds}
              </h3>
              <p className={s.time}>{auctionTimerData.secondText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuctionTimer;
