import { myContext } from '../../../context/Context';
import s from './UserTab.module.css';

const UserTab = ({ userData }) => {
  const { wordSearch, getObjectKeys } = myContext();
  const userDataKeys = getObjectKeys(userData);
  const wordText = wordSearch(userDataKeys, 'nfts');
  const nftsCount = userData.nfts.length;

  return (
    <>
      <section className={s.section}>
        <h5 className={s.subtitle}>{wordText}</h5>
        <div className={s.block}>
          <p className={s.count}>{nftsCount}</p>
        </div>
      </section>
    </>
  );
};

export default UserTab;
