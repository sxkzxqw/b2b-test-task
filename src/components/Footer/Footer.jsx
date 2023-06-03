import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/icons/logo.svg';
import shortCircles from '../../assets/icons/circlesShort.svg';
import longCircles from '../../assets/icons/circlesLong.svg';
import vk from '../../assets/icons/vk.svg';
import inst from '../../assets/icons/instagram.svg';
import NavigateButtons from '../NavigateButtons/NavigateButtons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.logo_wrapper}>
                    <img src={shortCircles} className={styles.circles} alt='decorative image' />
                    <div className={styles.text_wrapper}>
                        <img src={logo} alt='logo' className={styles.logo} />
                        <p className={styles.logo_text}>Строительная компания</p>
                    </div>
                    <img src={longCircles} className={styles.circles} alt='decorative image' />
                </div>
                <div className={styles.right_side}>
                    <div className={styles.right_side_up}>
                        <div className={styles.phone_wrapper}>
                            <p className={styles.phone}>+7 (999) 999-99-99</p>
                        </div>
                        <div className={styles.phone_wrapper}>
                            <p className={styles.phone}>+7 (999) 999-99-99</p>
                        </div>
                    </div>
                    <div className={styles.right_side_bottom}>
                        <div className={styles.city_wrapper}>
                            <p className={styles.text}>
                                <strong className={styles.strong}>г. Воронеж, &nbsp;</strong>
                                ул, Сакко и Ванцетти 78А, БЦ Делюкс, оф. 3112
                            </p>
                            <div className={styles.btn_bot}>
                                <p className={styles.text}>
                                    Создание сайта
                                </p>
                                <a className={styles.strong} href='https://github.com/sxkzxqw' target='_blank'>sxkzxqw</a>
                            </div>
                        </div>
                        <div className={styles.mail_wrapper}>
                            <p className={styles.sxkzxqw}>sxkzxqw</p>
                            <p className={styles.sxkzxqw_low}>sxkzxqw</p>
                        </div>
                        <div className={styles.bottom_right}>
                            <div className={styles.nav}>
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
                            </div>
                            <p className={styles.copyright}>© 2023. sxkzxqw.</p>
                        </div>
                    </div>
                </div>
            </div>
            <NavigateButtons className={styles.navigateButtons} />
        </footer>
    );
};

export default Footer;