import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <ul className={s.block}>
        <li>
          <Link className={s.box} to={'/home'}>
            <img src="/storefront_logo.svg" alt="storefront_logo_broken" />
            <img
              className={s.logo}
              src="/nft_marketplace_text.svg"
              alt="nft_marketplace_text_broken"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Logo;
