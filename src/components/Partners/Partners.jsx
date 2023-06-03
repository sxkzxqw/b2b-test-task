import React from 'react';
import styles from './Partners.module.scss';
import house from '../../assets/images2/partners/house.png';
import logoleft from '../../assets/images2/partners/logo3.svg';
import logoright from '../../assets/images2/partners/logo6.svg';
import logo1 from '../../assets/images2/partners/logo1.svg';
import logo2 from '../../assets/images2/partners/logo2.svg';
import logo3 from '../../assets/images2/partners/logo4.svg';
import logo4 from '../../assets/images2/partners/logo5.svg';
import logo5 from '../../assets/images2/partners/logo7.svg';
import logo6 from '../../assets/images2/partners/logo8.svg';

const Partners = () => {
    return (
        <section className={styles.section}>
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>Наши партнеры - солидные комании с качественными приоритетами</h2>
                <p className={styles.description}>Поставщики газосиликата, кирпича, керамического блока</p>
            </div>
            <img alt='house' className={styles.house} src={house} />
            <div className={styles.lists_wrapper}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <img src={logoleft} alt='logo' className={styles.logo} />
                    </li>
                    <li className={styles.item}>
                        <img src={logo1} alt='logo' className={styles.logo} />
                    </li>
                    <li className={styles.item}>
                        <img src={logo2} alt='logo' className={styles.logo} />
                    </li>
                    <li className={styles.item}>
                        <img src={logo3} alt='logo' className={styles.logo} />
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <img src={logo4} alt='logo' className={styles.logo} />
                    </li>
                    <li className={styles.item}>
                        <img src={logo5} alt='logo' className={styles.logo} />
                    </li>
                    <li className={styles.item}>
                        <img src={logo6} alt='logo' className={styles.logo} />
                    </li>
                    <li className={styles.item}>
                        <img src={logoright} alt='logo' className={styles.logo} />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Partners;