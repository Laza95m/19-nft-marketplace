import { myContext } from '../../../context/Context';
import ArtstNft from './ArtstNft/ArtstNft';
import AuctionTimer from './AuctionTimer/AuctionTimer';
import s from './InfoNft.module.css';

const InfoNft = () => {
  const { infoNftUsers, genereteRandomNum } = myContext();
  const usersLength = infoNftUsers.length - 1;
  const nftUsers = infoNftUsers[genereteRandomNum(usersLength)];

  return (
    <>
      {!!nftUsers && (
        <section
          style={{
            backgroundImage: `url(${nftUsers.nfts[0].nftSrc})`,
          }}
          className={s.section}
        >
          <div className={s.container}>
            <div className={s.block}>
              <ArtstNft nftUsers={nftUsers} />
              <AuctionTimer nftUsers={nftUsers} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default InfoNft;
