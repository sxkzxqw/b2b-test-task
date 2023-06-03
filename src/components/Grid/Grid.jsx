import React from 'react';
import first from '../../assets/images/grid/truba.png';
import second from '../../assets/images/grid/house1.png';
import third from '../../assets/images/grid/family.png';
import four from '../../assets/images/grid/procent.png';
import five from '../../assets/images/grid/house2.png';
import six from '../../assets/images/grid/house3.png';
import styles from './Grid.module.scss';

const Grid = () => {
    return (
        <section className={styles.section}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.item1}`}>
                    <h2 className={styles.title}>
                        6 уникальных преимуществ за которые нас любят и ценят
                    </h2>
                    <div className={styles.card}>
                        <div className={styles.white_bg}>
                            <div className={styles.container}>
                                <p className={styles.item_title}>От 4 месяцев</p>
                                <p className={`${styles.item_subtitle} ${styles.item_subtitle1}`}>
                                    За этот срок мы создадим шикарный проект, покажем и расскажем о его преимуществах, а после согласования — построим дом вашей мечты. Берёмся за проекты любой сложности: от небольших домиков в 50 кв м до статных двухуровневых особняков
                                </p>
                            </div>
                        </div>
                        <img src={first} alt='img' className={styles.img1} />
                    </div>
                </li>
                <li className={`${styles.item} ${styles.item2}`}>
                    <img src={second} alt='img' className={styles.img2} />
                    <div className={styles.white_bg}>
                        <div className={styles.container}>
                            <p className={styles.item_title}>С 2014 года</p>
                            <p className={`${styles.item_subtitle} ${styles.item_subtitle1}`}>
                                Уже 9 лет мы проектируем и строим. За это время наладили логистику поставок, внедрили многоступенчатый ОТК и самое главное — научились понимать желания наших клиентов
                            </p>
                        </div>
                    </div>
                </li>
                <li className={`${styles.item} ${styles.item2}`}>
                    <div className={styles.white_bg}>
                        <div className={styles.container}>
                            <p className={styles.item_title}>300+ домов для 300+ <br /> счастливых семей</p>
                            <p className={`${styles.item_subtitle} ${styles.item_subtitle1}`}>
                                Мы уже построили с самого основания и до финишной отделки. И это не однотипные проекты «по лекалам», а индивидуальный дизайн и функциональность под конкретные запросы
                            </p>
                        </div>
                    </div>
                    <img src={third} alt='img' className={styles.img3} />
                </li>
                <li className={`${styles.item} ${styles.item2}`}>
                    <div className={styles.white_bg}>
                        <div className={styles.container}>
                            <p className={styles.item_title}>Ипотека от 3%</p>
                            <p className={`${styles.item_subtitle} ${styles.item_subtitle1}`}>
                                Главное — желание. Мы готовы и уже реализовали более 200 проектов в ипотеку. Часть из них с начальным взносом, равным НОЛЬ рублей.<br /><br />
                                Одобрение ипотеки на строительство берём на себя и дарим в подарок. Сотрудничаем со СберБанк, ВТБ, Россельхозбанк, ПОЧТА БАНК, Уралсиб банк, Дом.РФ
                            </p>
                        </div>
                    </div>
                    <img src={four} alt='img' className={styles.img3} />
                </li>
                <li className={`${styles.item} ${styles.item2}`}>
                    <img src={five} alt='img' className={styles.img3} />
                    <div className={styles.white_bg}>
                        <div className={styles.container}>
                            <p className={styles.item_title}>Более 50 готовых проектов
                                с доставкой по всей РФ</p>
                            <p className={`${styles.item_subtitle} ${styles.item_subtitle1}`}>
                                Вы можете купить готовый дом, участок, или же только сам проект и построиться самому. Доставляем готовые проекты по всей стране за срок от 1 дня
                            </p>
                        </div>
                    </div>
                </li>
                <li className={`${styles.item} ${styles.item2}`}>
                    <div className={styles.white_bg}>
                        <div className={styles.container}>
                            <p className={styles.item_title}>Экономия до 20% бюджета</p>
                            <p className={`${styles.item_subtitle} ${styles.item_subtitle1}`}>
                                Мы не посредники, а строительная компания полного цикла. Поэтому не масштабируем проблемы и финансовые траты, перекладывая часть работ на посредников. А делаем проекты под ключ, с соблюдением бюджета и компенсацией неустоек
                            </p>
                        </div>
                    </div>
                    <img src={six} alt='img' className={styles.img3} />
                </li>
            </ul>
        </section>
    );
};

export default Grid;