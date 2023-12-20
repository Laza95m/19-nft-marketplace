import { myContext } from '../../../context/Context';
import ContactForm from './ContactForm/ContactForm';
import ImageSection from './ImageSection/ImageSection';
import s from './SubscribeWidget.module.css';

const SubscribeWidget = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.block}>
          <ImageSection />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default SubscribeWidget;
