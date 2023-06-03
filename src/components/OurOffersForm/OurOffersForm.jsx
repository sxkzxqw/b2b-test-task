import React from 'react';
import styles from './OurOffersForm.module.scss';
import mask from '../../assets/images/ourOffersForm/Mask.svg';
import book from '../../assets/images/ourOffersForm/image1.png';
import phone from '../../assets/images/ourOffersForm/phone.svg';
import phoneCalling from '../../assets/images/ourOffersForm/phoneCalling.svg';
import user from '../../assets/images/ourOffersForm/user.svg';
import checkbox from '../../assets/images/ourOffersForm/checkbox-mark.svg';
import CardForm from '../Common/CardForm/CardForm';

const OurOffersForm = () => {
    return (
        <section className={styles.section}>
            <CardForm className={styles.card} />
            <img src={book} alt='decorative image' className={styles.book} />
            <div className={styles.title_text}>
                <p className={styles.title}>
                    Расскажите нам, чего вы ожидаете от проекта, и
                </p>
                <p className={`${styles.title} ${styles.title_absolute}`}>мы за 5 минут предоставим</p>
                <p className={`${styles.title} ${styles.title_low_absolute}`}>предложение,</p>
                <p className={`${styles.title} ${styles.title_low}`}>которое вам понравится!</p>
            </div>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <fieldset className={styles.fieldset}>
                        <input className={styles.input} type="text" placeholder='Ваше имя' />
                        <img src={user} className={styles.user} alt='Ваше имя' />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <input className={styles.input} type="phone" placeholder='+7 (999) 999-99-99' />
                        <img src={phone} className={styles.user} alt='Номер телефона' />
                    </fieldset>
                </div>
                <div className={styles.submit_container}>
                    <div className={styles.submit_wrapper}>
                        <button className={styles.submitButton} type="submit">
                            <img src={checkbox} className={styles.checkbox} />
                        </button>
                        <div className={styles.submitText}>
                            <p className={styles.submit_text}>
                                Я даю свое согласие на обработку
                                персональных данных и соглашаюсь
                            </p>
                            <a className={styles.submit_text_underline} href='#'>
                                с политикой конфиденциальности
                            </a>
                        </div>
                    </div>
                    <button className={styles.phonebtn} type='button'>
                        <img src={phoneCalling} className={styles.phoneCall} />
                        <div className={styles.bgPhoneCall}>
                            <img src={mask} className={styles.phoneCallMask} />
                            <p className={styles.phoneCallText}>Консультация</p>
                        </div>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default OurOffersForm;