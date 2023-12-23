import { useForm } from 'react-hook-form';
import { myContext } from '../../../../context/Context';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const {
    subscribeWidgetData,
    validName,
    validPhone,
    validMessage,
    sendTelegramMessage,
  } = myContext();

  const contactFormData = subscribeWidgetData[1];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    sendTelegramMessage(data);
    reset();
  };

  return (
    <>
      <div className={s.container}>
        {!!contactFormData && (
          <>
            <div className={s.block}>
              <h3 className={s.title}>{contactFormData.title}</h3>
              <p className={s.subtitle}>{contactFormData.subtitle}</p>
            </div>
            <form
              className={s.form}
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <input
                {...register('name', validName)}
                type="text"
                className={s.inpName}
                placeholder={contactFormData.inpName}
              />
              {!!errors.name && (
                <p className={s.error}>{errors.name.message}</p>
              )}
              <input
                {...register('phone', validPhone)}
                type="tel"
                className={s.inpPhone}
                placeholder={contactFormData.inpPhone}
              />
              {!!errors.phone && (
                <p className={s.error}>{errors.phone.message}</p>
              )}
              <textarea
                {...register('message', validMessage)}
                className={s.textarea}
                rows="4"
                placeholder={contactFormData.inpTextarea}
              ></textarea>
              {!!errors.message && (
                <p className={s.error}>{errors.message.message}</p>
              )}
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
