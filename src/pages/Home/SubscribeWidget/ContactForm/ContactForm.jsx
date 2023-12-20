import { myContext } from '../../../../context/Context';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const { subscribeWidgetData } = myContext();
  const contactFormData = subscribeWidgetData[1];

  return (
    <>
      <div className={s.container}>
        {!!contactFormData && (
          <>
            <div className={s.block}>
              <h3 className={s.title}>{contactFormData.title}</h3>
              <p className={s.subtitle}>{contactFormData.subtitle}</p>
            </div>
            <form className={s.form} action="">
              <input
                className={s.inpName}
                type="text"
                placeholder={contactFormData.inpName}
              />
              <input
                className={s.inpPhone}
                type="number"
                placeholder={contactFormData.inpPhone}
              />
              <textarea
                className={s.textarea}
                name=""
                id=""
                rows="4"
                placeholder={contactFormData.inpTextarea}
              ></textarea>
              <button className={s.btnSendMes} type="submit">
                <img
                  className={s.img}
                  src={contactFormData.imgSrc}
                  alt={contactFormData.imgAlt}
                />
                {contactFormData.inpSendMes}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ContactForm;
