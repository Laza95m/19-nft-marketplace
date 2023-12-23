import Divider from './Divider/Divider';
import s from './Footer.module.css';
import FooterInfo from './FooterInfo/FooterInfo';

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <FooterInfo />
          <Divider />
        </div>
      </footer>
    </>
  );
};

export default Footer;
