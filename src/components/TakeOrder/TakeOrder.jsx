import React from 'react';
import styles from './TakeOrder.module.scss';
import ptichkahuichka from '../../assets/images2/takeOrder/prichkahuichka.png';
import CommonForm from '../Common/CommonForm/CommonForm';

const TakeOrder = () => {
    return (
        <section className={styles.section}>
            <div className={styles.text_wrapper}>
                <h2 className={styles.title}>Создадим проект дома, от которого вы будете в восторге и построим его за за 120 дней</h2>
                <p className={styles.description}>С DOMA.VRN легко сотрудничать в 6 этапов:</p>
                <ul className={styles.info_list}>
                    <li className={styles.info_item}>
                        <div className={styles.info_circles}>
                            <div className={styles.info_circle_inherit}></div>
                            <div className={styles.info_circle_green}></div>
                        </div>
                        <p className={styles.info_item_text}>
                            выбор проекта
                        </p>
                    </li>
                    <li className={styles.info_item}>
                        <div className={styles.info_circles}>
                            <div className={styles.info_circle_inherit}></div>
                            <div className={styles.info_circle_green}></div>
                        </div>
                        <p className={styles.info_item_text}>
                            уточнение деталей проекта (участок, стройматериалы и т.д.)
                        </p>
                    </li>
                    <li className={styles.info_item}>
                        <div className={styles.info_circles}>
                            <div className={styles.info_circle_inherit}></div>
                            <div className={styles.info_circle_green}></div>
                        </div>
                        <p className={styles.info_item_text}>
                            заполнение формы на сайте
                        </p>
                    </li>
                    <li className={styles.info_item}>
                        <div className={styles.info_circles}>
                            <div className={styles.info_circle_inherit}></div>
                            <div className={styles.info_circle_green}></div>
                        </div>
                        <p className={styles.info_item_text}>
                            получение договора и оплата проекта любым удобным способом
                        </p>
                    </li>
                    <li className={styles.info_item}>
                        <div className={styles.info_circles}>
                            <div className={styles.info_circle_inherit}></div>
                            <div className={styles.info_circle_green}></div>
                        </div>
                        <p className={styles.info_item_text}>
                            получение готового проекта лично в офисе или курьером по всей России
                        </p>
                    </li>
                    <li className={styles.info_item}>
                        <div className={styles.info_circles}>
                            <div className={styles.info_circle_inherit}></div>
                            <div className={styles.info_circle_green}></div>
                        </div>
                        <p className={styles.info_item_text}>
                            подписи обеих сторон и вступление договора в силу
                        </p>
                    </li>
                </ul>
            </div>
            <div className={styles.form_position}>
                <img src={ptichkahuichka} alt='ptichka' className={styles.bird} />
                <CommonForm />
            </div>
        </section>
    );
};

export default TakeOrder;