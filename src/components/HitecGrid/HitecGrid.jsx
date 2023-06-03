import React from 'react';
import styles from './HitecGrid.module.scss';
//grid
import lavka from '../../assets/images/hitec/grid/lavkapng.png';
import most from '../../assets/images/hitec/grid/most.png';
import trees from '../../assets/images/hitec/grid/trees1.png';
import listva from '../../assets/images/hitec/listva.png';


const HitecGrid = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Создано с любовью к нашим клиентам</h2>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.item1}`}>
                    <p className={`${styles.item_title} ${styles.item_title1}`}>15 минут езды от Воронежа, хорошая транспортная развязка</p>
                    <img src={most} alt='most' className={styles.most} />
                </li>
                <li className={`${styles.item} ${styles.item2}`}>
                    <p className={`${styles.item_title} ${styles.item_title2}`}>
                        Стоимость дома <br /> от 12 500 000 ₽
                    </p>
                    <p className={`${styles.item_subtitle} ${styles.item_subtitle2}`}>
                        (покупка земли или дома под <br /> заказ не предусмотрена)
                    </p>
                </li>
                <li className={`${styles.item} ${styles.item3}`}>
                    <img src={trees} alt='trees' className={styles.trees} />
                    <p className={`${styles.item_title} ${styles.item_title3}`}>Рядом с заповедной зоной</p>
                    <p className={`${styles.item_subtitle} ${styles.item_subtitle3}`}>(озеро, лес, чистый воздух)</p>
                </li>
                <li className={`${styles.item} ${styles.item4}`}>
                    <img src={lavka} alt='lavka' className={styles.lavka} />
                    <p className={`${styles.item_title} ${styles.item_title4}`}>5 просторных <br />
                        и ухоженных улиц</p>
                </li>
                <li className={`${styles.item} ${styles.item5}`}>
                    <p className={`${styles.item_title} ${styles.item_title5}`}>Проведены<br /> все инженерные <br /> коммуникации</p>
                </li>
                <li className={`${styles.item} ${styles.item6}`}>
                    <div className={styles.item7}>
                        <p className={`${styles.item_title} ${styles.item_title5}`}>Детские садики, школы, магазины на территории</p>
                    </div>
                    <div className={styles.item8}>
                        <p className={`${styles.item_title} ${styles.item_title8}`}>Асфальтные дороги, парковки, детские и спортивные площадки</p>
                    </div>
                </li>
            </ul>
            <img src={listva} alt='listva' className={styles.listva} />
        </section>
    );
};

export default HitecGrid;