import { useEffect, useState } from 'react';
import { myContext } from '../../../context/Context';
import s from './NFTInfo.module.css';
import { Link } from 'react-router-dom';

const NFTInfo = ({ userData }) => {
  const { ms, calculateTimeRemaining } = myContext();
  const timerUser = userData.nfts[0].timerHours;
  const days = Math.floor(timerUser / 24);
  const deadline = new Date(Date.now() + timerUser * ms);
  const nft = userData.nfts[0];

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
      {!!userData && (
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.block_one}>
              <div className={s.box_one}>
                <h5 className={s.title}>{nft.nftName}</h5>
              </div>

              <div className={s.box_two}>
                <h5 className={s.title}>Created By</h5>
                <Link className={s.holder} to={`/user-page/${userData.id}`}>
                  <img
                    className={s.img}
                    src={userData.primarySrc}
                    alt={userData.primaryAlt}
                  />
                  <h5 className={s.name}>{userData.nickName}</h5>
                </Link>
              </div>

              <div className={s.box_three}>
                <h5 className={s.title}>Description</h5>
                {nft.description.map((el) => (
                  <div key={el.id}>
                    <p className={s.text}>{el.text}</p>
                    <br />
                  </div>
                ))}
              </div>
            </div>

            <div className={s.block_two}>
              <div className={s.box}>
                <p className={s.text}>Auction ends in:</p>

                <div className={s.holder}>
                  <div className={s.wrap}>
                    <h3 className={s.title}>
                      {timeRemaining.hours < 10
                        ? `0${timeRemaining.hours}`
                        : timeRemaining.hours}
                    </h3>
                    <p className={s.text}>Hours</p>
                  </div>
                  <h4 className={s.colon}>:</h4>
                  <div className={s.wrap}>
                    <h3 className={s.title}>
                      {timeRemaining.minutes < 10
                        ? `0${timeRemaining.minutes}`
                        : timeRemaining.minutes}
                    </h3>
                    <p className={s.text}>Minutes</p>
                  </div>
                  <h4 className={s.colon}>:</h4>
                  <div className={s.wrap}>
                    <h3 className={s.title}>
                      {timeRemaining.seconds < 10
                        ? `0${timeRemaining.seconds}`
                        : timeRemaining.seconds}
                    </h3>
                    <p className={s.text}>Seconds</p>
                  </div>
                </div>
              </div>

              <button className={s.btn} type="button">
                Place Bid
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NFTInfo;
