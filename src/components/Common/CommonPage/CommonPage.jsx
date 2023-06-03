import React from 'react';
import logo from '../../../assets/icons/logo.svg';
import shortCircles from '../../../assets/icons/circlesShort.svg';
import longCircles from '../../../assets/icons/circlesLong.svg';
import vk from '../../../assets/icons/vk.svg';
import inst from '../../../assets/icons/instagram.svg';
import styles from './CommonPage.module.scss';

const CommonPage = ({ children }) => {
    return (
        <div className={styles.page}>
            <div className={styles.blur}>
                <header className={styles.header}>
                    <div className={styles.logo_wrapper}>
                        <img src={shortCircles} className={styles.circles} alt='decorative image' />
                        <div className={styles.text_wrapper}>
                            <img src={logo} alt='logo' className={styles.logo} />
                            <p className={styles.logo_text}>Строительная компания</p>
                        </div>
                        <img src={longCircles} className={styles.circles} alt='decorative image' />
                    </div>
                    <div className={styles.right_side_wrapper}>
                        <nav className={styles.nav}>
                            <a className={styles.nav_item} href="#">
                                <div className={styles.nav_item_border}>
                                    <img src={vk} alt='vk' />
                                </div>
                            </a>
                            <a className={styles.nav_item} href="#">
                                <div className={styles.nav_item_border}>
                                    <img src={inst} alt='instagram' />
                                </div>
                            </a>
                        </nav>
                        <div className={styles.info_wrapper}>
                            <div className={styles.info_wrapper_item}>
                                <p className={styles.address}><strong className={styles.city}>г. Воронеж, </strong>ул, Сакко и Ванцетти 78А, БЦ Делюкс, оф. 3112</p>
                            </div>
                            <div className={styles.email_wrapper}>
                                <p className={styles.address}>doma.vrn@mail.ru</p>
                            </div>
                        </div>
                        <div className={`${styles.info_wrapper} ${styles.info_wrapper2}`}>
                            <div className={styles.info_wrapper_item_second}>
                                <p className={styles.phone}>+7 (473) 294-43-53</p>
                                <p className={styles.phone}>+7 (908) 132-42-91</p>
                            </div>
                            <button className={styles.phone_button}>
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </header>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default CommonPage;