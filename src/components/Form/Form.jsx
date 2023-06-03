import React from 'react';
import styles from './Form.module.scss';
import book from '../../assets/images2/form/book.png';
import CommonForm from '../Common/CommonForm/CommonForm';

const Form = () => {
    return (
        <section className={styles.section}>
            <img className={styles.book} src={book} alt='book' />
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>Получите<strong className={`${styles.title} ${styles.title_absolute}`}> бесплатное </strong>страхование при заказе наших услуг уже сегодня</h2>
            </div>
            <CommonForm className={styles.form} />
        </section>
    );
};

export default Form;