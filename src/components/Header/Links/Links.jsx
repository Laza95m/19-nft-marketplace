import { Link } from 'react-router-dom';
import s from './Links.module.css';
import { myContext } from '../../../context/Context';

const Links = () => {
  const { links } = myContext();

  return (
    <>
      <ul className={s.block}>
        {links?.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
        <li>
          <Link className={s.link} to={'/sign-up'}>
            <img src="/header/user.svg" alt="user_broken" />
            Sign Up
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
