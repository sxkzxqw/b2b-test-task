import React from 'react';
import styles from './Slider.module.scss';
import grid11 from '../../assets/images/slider/grid11.png';
import grid12 from '../../assets/images/slider/grid12.png';
import grid2 from '../../assets/images/slider/grid6.png';
import grid6 from '../../assets/images/slider/grid6.png';
import grid4 from '../../assets/images/slider/grid4.png';
import grid31 from '../../assets/images/slider/grid31.png';
import grid32 from '../../assets/images/slider/grid32.png';
import grid51 from '../../assets/images/slider/grid51.png';
import grid52 from '../../assets/images/slider/grid52.png';

const Slider = () => {
    return (
        <section className={styles.section}>
            <div className={styles.first}>
                <img src={grid11} alt='house' className={styles.short} />
                <img src={grid12} alt='house' className={styles.short} />
            </div>
            <img src={grid4} alt='house' className={styles.long} />
            <div className={styles.first}>
                <img src={grid31} alt='house' className={styles.short_l} />
                <img src={grid32} alt='house' className={styles.short_l} />
            </div>
            <img src={grid4} alt='house' className={styles.long} />
            <div className={styles.first}>
                <img src={grid51} alt='house' className={styles.short_l} />
                <img src={grid52} alt='house' className={styles.short_l} />
            </div>
            <img src={grid6} alt='house' className={styles.long} />
        </section>
    );
};

export default Slider;