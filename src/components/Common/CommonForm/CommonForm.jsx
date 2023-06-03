import React from 'react';
import styles from './CommonForm.module.scss';
import user from '../../../assets/images2/form/user.svg';
import phone from '../../../assets/images2/form/phone.svg';
import mail from '../../../assets/images2/form/mail.svg';
import phoneCalling from '../../../assets/images2/form/phoneCalling.svg';
import backgroundBtn from '../../../assets/images2/form/Maskgroup.svg';
import checkbox from '../../../assets/images/ourOffersForm/checkbox-mark.svg';

const CommonForm = ({ className }) => {
    return (
        <form className={`${styles.form} ${className}`}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Оставьте заявку</h3>
                <fieldset className={styles.fieldset}>
                    <div className={styles.input_wrapper}>
                        <input type="text" className={styles.input} placeholder='Ваше имя' />
                        <img src={user} alt='user' className={styles.input_img} />
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type="phone" className={styles.input} placeholder='+7 (999) 999-99-99' />
                        <img src={phone} alt='phone' className={styles.input_img} />
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type="email" className={styles.input} placeholder='Ваша почта' />
                        <img src={mail} alt='mail' className={styles.input_img} />
                    </div>
                </fieldset>
                <button className={styles.button} type='button'>
                    <img src={phoneCalling} />
                    <div className={styles.backgroundBtn}>
                        <img src={backgroundBtn} className={styles.backgroundBtn_img} />
                        <p className={styles.zayavka_text}>Получить страхование</p>
                    </div>
                </button>
                <div className={styles.submit_wrapper}>
                    <button className={styles.submitButton} type="button">
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
            </div>
        </form>
    );
};

export default CommonForm;