import s from './BurgerMenu.module.css';
import BurgerLinks from './BurgerLinks/BurgerLinks';

const BurgerMenu = () => {
  return (
    <>
      <img
        className={s.burger_menu_open}
        src="/header/burger_menu_open.svg"
        alt="burger_menu_open_broken"
      />
      <aside className={s.popup}>
        <nav className={s.nav}>
          <BurgerLinks />
        </nav>
      </aside>
    </>
  );
};

export default BurgerMenu;
