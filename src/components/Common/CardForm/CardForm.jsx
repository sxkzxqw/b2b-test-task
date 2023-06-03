import React from 'react';
import styles from './CardForm.module.scss';
import active from '../../../assets/commonImg/active.svg';
import telka from '../../../assets/commonImg/telka.png';
import logo from '../../../assets/icons/logo.svg';

const CardForm = ({ className }) => {
    return (
        <div className={`${styles.cardTemplate} ${className}`}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <img src={telka} alt='devushka' className={styles.telka} />
                    <img src={logo} className={styles.logo} alt='logo' />
                    <div className={styles.info_wrapper}>
                        <img src={active} alt='' />
                        <p className={styles.info_text}>Сейчас работаем</p>
                    </div>
                    <p className={styles.info_phone}>+7 (473) 294-43-53</p>
                </div>
            </div>
        </div>
    );
};

export default CardForm;