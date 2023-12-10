import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <ul className={s.block}>
        <li>
          <Link className={s.box} to={'/home'}>
            <img
              src="/header/storefront_logo.svg"
              alt="storefront_logo_broken"
            />
            <img
              className={s.logo}
              src="/header/nft_marketplace.svg"
              alt="nft_marketplace_broken"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Logo;
