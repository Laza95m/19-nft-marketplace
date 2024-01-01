import s from './BurgerLinks.module.css';
import { Link } from 'react-router-dom';
import { myContext } from '../../../../context/Context';

const BurgerLinks = () => {
  const { links, userEnter, getTheFirstWord } = myContext();

  const userName = getTheFirstWord(userEnter?.fullName);

  return (
    <>
      <ul className={s.block}>
        {links?.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
        {!!userName ? (
          <li>
            <Link className={s.link} to={`/user-page/${userEnter.id}`}>
              <img src="/header/user.svg" alt="user_broken" />
              {userName}
            </Link>
          </li>
        ) : (
          <li>
            <Link className={s.link} to={'/sign-up'}>
              <img src="/header/user.svg" alt="user_broken" />
              Sign Up
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default BurgerLinks;
