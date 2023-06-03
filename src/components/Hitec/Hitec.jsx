import React from 'react';
import styles from './Hitec.module.scss';
//bg
import house1 from '../../assets/images/hitec/house1.png';
import house2 from '../../assets/images/hitec/house2.png';
import tree from '../../assets/images/hitec/tree.png';

const Hitec = () => {
    return (
        <section className={styles.section}>
            <div className={styles.up}>
                <img src={tree} alt='tree' className={styles.tree} />
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>
                        Староживотинное: масштабная комплексная застройка в Хай-Тек от DOMA.VRN
                    </h2>
                    <p className={styles.subtitle}>
                        Прогрессивные технологии в дизайне и архитектуре в самом сердце заповедной зоны
                    </p>
                </div>
                <div className={styles.info_wrapper}>
                    <div className={styles.info}>
                        <h3 className={styles.info_title}>Каждый дом - это 130 квадратных метров Вашего комфорта</h3>
                        <ul className={styles.info_list}>
                            <li className={styles.info_item}>
                                <div className={styles.info_circles}>
                                    <div className={styles.info_circle_inherit}></div>
                                    <div className={styles.info_circle_green}></div>
                                </div>
                                <p className={styles.info_item_text}>
                                    Предчистовая отделка помещений
                                </p>
                            </li>
                            <li className={styles.info_item}>
                                <div className={styles.info_circles}>
                                    <div className={styles.info_circle_inherit}></div>
                                    <div className={styles.info_circle_green}></div>
                                </div>
                                <p className={styles.info_item_text}>
                                    Эстетичная тротуарная плитка
                                </p>
                            </li>
                            <li className={styles.info_item}>
                                <div className={styles.info_circles}>
                                    <div className={styles.info_circle_inherit}></div>
                                    <div className={styles.info_circle_green}></div>
                                </div>
                                <p className={styles.info_item_text}>
                                    Функциональная и продуманная отмостка
                                </p>
                            </li>
                            <li className={styles.info_item}>
                                <div className={styles.info_circles}>
                                    <div className={styles.info_circle_inherit}></div>
                                    <div className={styles.info_circle_green}></div>
                                </div>
                                <p className={styles.info_item_text}>
                                    Ограждение территории забором
                                </p>
                            </li>
                            <li className={styles.info_item}>
                                <div className={styles.info_circles}>
                                    <div className={styles.info_circle_inherit}></div>
                                    <div className={styles.info_circle_green}></div>
                                </div>
                                <p className={styles.info_item_text}>
                                    Все дома выполнены в едином стиле
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.slider}>
                        <img src={house1} alt='house' className={styles.house1} />
                        <img src={house2} alt='house' className={styles.house2} />
                        <div className={styles.buttons}>
                            <button className={styles.button} type='button'>
                                <div className={styles.button_wrapper}>
                                    {`<`}
                                </div>
                            </button>
                            <button className={styles.button} type='button'>
                                <div className={styles.button_wrapper}>
                                    {`>`}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.low}>

            </div>
        </section>
    );
};

export default Hitec;