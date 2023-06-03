import React from 'react';
import styles from './OurOffers.module.scss';
import first from '../../assets/images/ourOffers/first.png';
import second from '../../assets/images/ourOffers/second.png';
import third from '../../assets/images/ourOffers/third.png';
import four from '../../assets/images/ourOffers/four.png';
import price from '../../assets/images/ourOffers/price.svg';
import tree from '../../assets/images/ourOffers/tree.png';
import Rectangle1 from '../../assets/images/ourOffers/rectangle.png';
import Rectangle2 from '../../assets/images/ourOffers/Rectangle2.png';
import Rectangle3 from '../../assets/images/ourOffers/Rectangle3.png';
import Rectangle4 from '../../assets/images/ourOffers/Rectangle4.png';
import Rectangle5 from '../../assets/images/ourOffers/Rectangle5.png';

const OurOffers = () => {
    return (
        <section className={styles.section}>
            <div className={styles.up}>
                <ul className={styles.up_list}>
                    <li className={styles.item}>
                        <img className={styles.img} alt='decoration image' src={first} />
                        <div className={styles.text_container}>
                            <p className={styles.text}>Строим в ипотеку</p>
                            <p className={`${styles.text} ${styles.text_bold}`}>без первоначального взноса (от 3% годовых)</p>
                        </div>
                    </li>
                    <li className={styles.border}></li>
                    <li className={styles.item}>
                        <img className={`${styles.img} ${styles.img_sec}`} alt='decoration image' src={second} />
                        <div className={`${styles.text_container} ${styles.text_container_sec}`}>
                            <p className={styles.text}>Даем <strong className={styles.text_bold}>гарантию на материалы
                                и дом от 5 лет</strong></p>
                        </div>
                    </li>
                    <li className={styles.border}></li>
                    <li className={`${styles.item} ${styles.text_container_third}`}>
                        <img className={`${styles.img} ${styles.img_third}`} alt='decoration image' src={third} />
                        <div className={`${styles.text_container} ${styles.text_container_third}`}>
                            <strong className={`${styles.text} ${styles.text_bold}`}>Сроки и бюджет НЕ превышаем,</strong>
                            <p className={styles.text}>а форс-мажоры и непредвиденные обстоятельства компенсируем со своего карманау</p>
                        </div>
                    </li>
                    <li className={styles.border}></li>
                    <li className={`${styles.item} ${styles.text_container_four}`}>
                        <img className={`${styles.img} ${styles.img_four}`} alt='decoration image' src={four} />
                        <div className={`${styles.text_container} ${styles.text_container_four}`}>
                            <strong className={`${styles.text} ${styles.text_bold}`}>Экономим клиенту до 20% бюджета </strong>
                            <p className={`${styles.text}`}>за счёт собственного отдела проектирования, ОТК и прямых поставок материалов от производителя</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.lower}>
                <h2 className={styles.title}>
                    У нас есть прекрасное решение под любой ваш запрос уже сегодня
                </h2>
                <img src={tree} alt='tree' className={styles.tree} />
                <ul className={styles.list_low}>
                    <li className={styles.item_low}>
                        <div className={styles.item_low_text_wrapper}>
                            <p className={`${styles.item_low_text} ${styles.item_low_text_bold}`}>
                                Роскошные проекты
                            </p>
                            <p className={`${styles.item_low_text}`}>
                                на строительство <br /> дома
                            </p>
                        </div>
                        <div className={styles.low_price}>
                            <img src={price} alt='decoration img' className={styles.price} />
                            <p className={styles.text_price}>от 24 999 Р</p>
                        </div>
                    </li>
                    <li className={`${styles.item_low} ${styles.item_low_second}`}>
                        <div className={styles.item_low_text_wrapper}>
                            <p className={`${styles.item_low_text} ${styles.item_low_text_bold}`}>
                                Строительство стильных террас,
                            </p>
                            <p className={`${styles.item_low_text}`}>
                                гаражей, бань
                            </p>
                        </div>
                        <div className={styles.low_price}>
                            <img src={price} alt='decoration img' className={styles.price} />
                            <p className={styles.text_price}>от 899 999 Р</p>
                        </div>
                    </li>
                    <li className={`${styles.item_low} ${styles.item_low_third}`}>
                        <div className={styles.item_low_text_wrapper}>
                            <p className={`${styles.item_low_text} ${styles.item_low_text_bold}`}>
                                Строительство капитальных ангаров,
                            </p>
                            <p className={`${styles.item_low_text}`}>
                                складов и магазинов
                            </p>
                        </div>
                        <div className={styles.low_price}>
                            <img src={price} alt='decoration img' className={styles.price} />
                            <p className={styles.text_price}>от 24 999 Р</p>
                        </div>
                    </li>
                    <li className={`${styles.item_low} ${styles.item_low_four}`}>
                        <div className={styles.item_low_text_wrapper}>
                            <p className={`${styles.item_low_text} ${styles.item_low_text_bold}`}>
                                Просторные земельные участки
                            </p>
                            <p className={`${styles.item_low_text}`}>
                                под строительство
                            </p>
                        </div>
                        <div className={styles.low_price}>
                            <img src={price} alt='decoration img' className={styles.price} />
                            <p className={styles.text_price}>от 5 299 999 Р</p>
                        </div>
                    </li>
                    <li className={`${styles.item_low} ${styles.item_low_five}`}>
                        <div className={styles.item_low_text_wrapper}>
                            <p className={`${styles.item_low_text}`}>
                                Красивые <br /> и функциональные
                            </p>
                            <p className={`${styles.item_low_text} ${styles.item_low_text_bold}`}>
                                жилые дома под ключ
                            </p>
                        </div>
                        <div className={styles.low_price}>
                            <img src={price} alt='decoration img' className={styles.price} />
                            <p className={styles.text_price}>от 7 999 999 Р</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OurOffers;