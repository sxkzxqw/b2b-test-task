import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigateButtons.module.scss';

const NavigateButtons = ({ className }) => {
    return (
        <div className={`${styles.buttons} ${className}`}>
            <Link to={'/dwadawdaw'} className={styles.link}>
                Not found page
            </Link>
            <Link to={'/success'} className={styles.link}>
                Success page
            </Link>
        </div>
    );
};

export default NavigateButtons;