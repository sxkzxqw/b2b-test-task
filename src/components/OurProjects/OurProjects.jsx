import React from 'react';
import zalupa from '../../assets/images/ourProjects/lupa-zalupa.svg';
import first from '../../assets/images/ourProjects/first.png'
import second from '../../assets/images/ourProjects/second.png';
import third from '../../assets/images/ourProjects/third.png';
import four from '../../assets/images/ourProjects/four.png';
import five from '../../assets/images/ourProjects/five.png';
import pole from '../../assets/images/ourProjects/pole.png';
import dom from '../../assets/images/ourProjects/dom.png';
import styles from './OurProjects.module.scss';
import backgroundBtn from '../../assets/images/ourProjects/Maskgroup.svg';
import zayavka from '../../assets/icons/zayavka.svg';

const OurProjects = () => {
    return (
        <section className={styles.section}>
            <img src={dom} alt='house' className={styles.dom} />
            <img src={pole} alt='pole' className={styles.pole} />
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>Изумительные проекты выполненные в современных стилях архитектуры</h2>
                <p className={styles.subtitle}>Более 50 вариантов одноэтажных
                    и двухэтажных домов под любой бюджет</p>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.item_up}>
                        <img className={styles.img} src={first} alt='house' />
                        <div className={styles.podskazki}>
                            <button className={styles.zalupa} type='button'>
                                <img src={zalupa} />
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`<`}
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`>`}
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_mid}>
                        <p className={styles.item_title}>Название 1</p>
                        <ul className={styles.item_list}>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Площадь:</p>
                                <p className={styles.item_item_subtitle}>300&sup2;</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Спальни:</p>
                                <p className={styles.item_item_subtitle}>5</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена строительства:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена проекта:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item_low}>
                        <button className={styles.button} type='button'>
                            Купить проект
                        </button>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.item_up}>
                        <img className={styles.img} src={second} alt='house' />
                        <div className={styles.podskazki}>
                            <button className={styles.zalupa} type='button'>
                                <img src={zalupa} />
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`<`}
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`>`}
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_mid}>
                        <p className={styles.item_title}>Название 1</p>
                        <ul className={styles.item_list}>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Площадь:</p>
                                <p className={styles.item_item_subtitle}>300&sup2;</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Спальни:</p>
                                <p className={styles.item_item_subtitle}>5</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена строительства:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена проекта:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item_low}>
                        <button className={styles.button} type='button'>
                            Купить проект
                        </button>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.item_up}>
                        <img className={styles.img} src={third} alt='house' />
                        <div className={styles.podskazki}>
                            <button className={styles.zalupa} type='button'>
                                <img src={zalupa} />
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`<`}
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`>`}
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_mid}>
                        <p className={styles.item_title}>Название 1</p>
                        <ul className={styles.item_list}>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Площадь:</p>
                                <p className={styles.item_item_subtitle}>300&sup2;</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Спальни:</p>
                                <p className={styles.item_item_subtitle}>5</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена строительства:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена проекта:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item_low}>
                        <button className={styles.button} type='button'>
                            Купить проект
                        </button>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.item_up}>
                        <img className={styles.img} src={four} alt='house' />
                        <div className={styles.podskazki}>
                            <button className={styles.zalupa} type='button'>
                                <img src={zalupa} />
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`<`}
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`>`}
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_mid}>
                        <p className={styles.item_title}>Название 1</p>
                        <ul className={styles.item_list}>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Площадь:</p>
                                <p className={styles.item_item_subtitle}>300&sup2;</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Спальни:</p>
                                <p className={styles.item_item_subtitle}>5</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена строительства:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена проекта:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item_low}>
                        <button className={styles.button} type='button'>
                            Купить проект
                        </button>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.item_up}>
                        <img className={styles.img} src={five} alt='house' />
                        <div className={styles.podskazki}>
                            <button className={styles.zalupa} type='button'>
                                <img src={zalupa} />
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`<`}
                            </button>
                            <button className={styles.zalupa} type='button'>
                                {`>`}
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_mid}>
                        <p className={styles.item_title}>Название 1</p>
                        <ul className={styles.item_list}>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Площадь:</p>
                                <p className={styles.item_item_subtitle}>300&sup2;</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Спальни:</p>
                                <p className={styles.item_item_subtitle}>5</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена строительства:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                            <li className={styles.item_item}>
                                <p className={styles.item_item_title}>Цена проекта:</p>
                                <p className={styles.item_item_subtitle}>380 333 руб.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item_low}>
                        <button className={styles.button} type='button'>
                            Купить проект
                        </button>
                    </div>
                </li>
            </ul>
            <button className={styles.button_watch} type='button'>
                <img src={zayavka} />
                <div className={styles.backgroundBtn}>
                    <img src={backgroundBtn} className={styles.backgroundBtn_img} />
                    <p className={styles.zayavka_text}>Посмотреть весь каталог проектов</p>
                </div>
            </button>
        </section>
    );
};

export default OurProjects;