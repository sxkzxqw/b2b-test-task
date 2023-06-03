import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';
import shortCircles from '../../assets/icons/circlesShort.svg';
import longCircles from '../../assets/icons/circlesLong.svg';
import pen from '../../assets/icons/pen.svg';
import bird from '../../assets/images/header/bird.png';
import zayavka from '../../assets/icons/zayavka.svg';
import backgroundBtn from '../../assets/icons/backgroundBtn.svg';
import circleImage from '../../assets/images/header/circleHouse.png';
import vk from '../../assets/icons/vk.svg';
import inst from '../../assets/icons/instagram.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left_side_wrapper}>
                <div className={styles.logo_wrapper}>
                    <img src={shortCircles} className={styles.circles} alt='decorative image' />
                    <div className={styles.text_wrapper}>
                        <img src={logo} alt='logo' className={styles.logo} />
                        <p className={styles.logo_text}>Строительная компания</p>
                    </div>
                    <img src={longCircles} className={styles.circles} alt='decorative image' />
                </div>
                <div className={styles.main}>
                    <div className={styles.title_wrapper}>
                        <h1 className={styles.title}>Проектирование
                            и строительство каменных домов в Воронеже и ВО
                        </h1>
                        <div className={styles.subtitle}>
                            <img src={pen} className={styles.pen} alt='decorative image' />
                            <h2 className={styles.subtitle_text}>
                                под ключ, в срок за 120 дней
                            </h2>
                            <img src={bird} className={styles.bird} alt='decorative image' />
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <button className={styles.button} type='button'>
                            <img src={zayavka} />
                            <div className={styles.backgroundBtn}>
                                <img src={backgroundBtn} className={styles.backgroundBtn_img} />
                                <p className={styles.zayavka_text}>Оставить заявку</p>
                            </div>
                        </button>
                        <div className={styles.circleHouse}>
                            <img src={circleImage} className={styles.cirleImage} />
                        </div>
                        <p className={styles.podberem}>
                            Подберем наилучший проект дома под ваш участок
                        </p>
                    </div>
                </div>
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
    );
};

export default Header;