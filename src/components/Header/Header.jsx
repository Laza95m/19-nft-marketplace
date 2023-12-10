import s from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <Logo />
          <NavLinks />
          <BurgerMenu />
        </nav>
      </header>
    </>
  );
};

export default Header;
