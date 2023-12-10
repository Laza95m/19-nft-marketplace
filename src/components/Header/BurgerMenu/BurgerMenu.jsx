import s from './BurgerMenu.module.css';
import BurgerLinks from './BurgerLinks/BurgerLinks';
import { myContext } from '../../../context/Context';

const BurgerMenu = () => {
  const { isPopup, openPopup, closePopup } = myContext();

  return (
    <>
      <img
        onClick={openPopup}
        className={s.burger_menu_open}
        src="/header/burger_menu_open.svg"
        alt="burger_menu_open_broken"
      />
      <aside
        onClick={closePopup}
        className={isPopup ? `${s.popup} ${s.active}` : s.popup}
      >
        <nav onClick={(e) => e.stopPropagation()} className={s.nav}>
          <BurgerLinks />
        </nav>
      </aside>
    </>
  );
};

export default BurgerMenu;
