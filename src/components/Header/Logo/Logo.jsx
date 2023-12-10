import s from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <ul className={s.block}>
        <li>
          <Link className={s.box} to={'/home'}>
            <img
              className={s.logo}
              src="/header/storefront_logo.svg"
              alt="storefront_logo_broken"
            />
            <img
              className={s.logo_text}
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
