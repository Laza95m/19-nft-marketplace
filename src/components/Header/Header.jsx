import s from './Header.module.css';
import Links from './Links/Links';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <Logo />
          <Links />
        </nav>
      </header>
    </>
  );
};

export default Header;
