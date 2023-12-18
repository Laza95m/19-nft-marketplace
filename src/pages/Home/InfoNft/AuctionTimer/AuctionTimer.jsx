import s from './AuctionTimer.module.css';
import { myContext } from '../../../../context/Context';
import { useEffect, useState } from 'react';

const AuctionTimer = ({ nftUsers }) => {
  const { infoNftData } = myContext();
  const auctionTimerData = infoNftData[1];
  const timerUser = nftUsers.nfts[0].timerHours;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const ms = 3600000;

  const deadline = 'December, 22, 2023';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!!auctionTimerData && (
        <div className={s.container}>
          <p className={s.title}>{auctionTimerData.title}</p>
          <div className={s.block}>
            <div className={s.box}>
              <h3 className={s.num}>
                {hours < 10 ? '0' + hours : hours + days * 24}
              </h3>
              <p className={s.time}>{auctionTimerData.hourText}</p>
            </div>
            <h4 className={s.colon}>{auctionTimerData.colon}</h4>
            <div className={s.box}>
              <h3 className={s.num}>
                {minutes < 10 ? '0' + minutes : minutes}
              </h3>
              <p className={s.time}>{auctionTimerData.minuteText}</p>
            </div>
            <h4 className={s.colon}>{auctionTimerData.colon}</h4>
            <div className={s.box}>
              <h3 className={s.num}>
                {seconds < 10 ? '0' + seconds : seconds}
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
