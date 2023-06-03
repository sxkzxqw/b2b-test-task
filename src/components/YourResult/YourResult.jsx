import React from 'react';
import styles from './YourResult.module.scss';
import otric from '../../assets/images2/yourResult/krestik.svg';
import polozh from '../../assets/images2/yourResult/galka.svg';
import stroitel from '../../assets/images2/yourResult/stroitel.png';
import trubi from '../../assets/images2/yourResult/trubi.png';
import checkbox from '../../assets/images/ourOffersForm/checkbox-mark.svg';
import mask from '../../assets/images/ourOffersForm/Mask.svg';
import phoneCalling from '../../assets/images/ourOffersForm/phoneCalling.svg';
import user from '../../assets/images/ourOffersForm/user.svg';
import phone from '../../assets/images/ourOffersForm/phone.svg';

const YourResult = () => {
    return (
        <section className={styles.section}>
            <img alt='' src={trubi} className={styles.trubi} />
            <img alt='' src={stroitel} className={styles.stroitel} />
            <h1 className={styles.title}>
                Исключительные возможности для гарантий вашего результата
            </h1>
            <div className={styles.title_row}>
                <h3 className={styles.title3}>При заказе у 86% <br /> других компаний</h3>
                <h3 className={styles.title3}>При заказе <br /> у DOMA.VRN</h3>
            </div>
            <div className={styles.otzivi}>
                <ul className={styles.otric}>
                    <li className={`${styles.item} ${styles.item1}`}>
                        <img src={otric} alt='' className={styles.otric} />
                        <p className={styles.item_text}>
                            <strong className={styles.strong}>
                                Есть проблемы с качеством, потому что хотят сэкономить и покупают бюджетные материалы.&nbsp;
                            </strong>
                            Сразу определить проблему бывает не просто, но со временем она обязательно проявится
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item2}`}>
                        <img src={otric} alt='' className={styles.otric} />
                        <p className={styles.item_text}>
                            <strong className={styles.strong}>
                                Сроки выполнения проекта затягиваются,
                            </strong>
                            &nbsp;менеджер кормит завтраками, но переезд клиента задерживается и увеличиваются расходы
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item3}`}>
                        <img src={otric} alt='' className={styles.otric} />
                        <p className={styles.item_text}>
                            <strong className={styles.strong}>
                                Оговорённый на старте бюджет постоянно растёт, &nbsp;
                            </strong>
                            появляются новые статьи расходов и приходится ужимать другие важные нужды
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item4}`}>
                        <img src={otric} alt='' className={styles.otric} />
                        <p className={styles.item_text}>
                            <strong className={styles.strong}>
                                Проблемы с разрешительной документацией после строительства<br /> дома. &nbsp;
                            </strong>
                            Это лишний стресс, потеря времени и денег
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item5}`}>
                        <img src={otric} alt='' className={styles.otric} />
                        <p className={styles.item_text}>
                            <strong className={styles.strong}>
                                Хорошие и честные люди, но сказывается нехватка опыта компании.&nbsp;
                            </strong>
                            Это масштабирует ошибки и не может гарантировать нужный результат
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item6}`}>
                        <img src={otric} alt='' className={styles.otric} />
                        <p className={styles.item_text}>
                            <strong className={styles.strong}>
                                Качество и сроки соблюдаются,
                                но из-за строительных работ появляются конфликты с соседями&nbsp;
                            </strong>
                        </p>
                    </li>
                </ul>
                <ul className={styles.polozh}>
                    <li className={`${styles.item} ${styles.item7}`}>
                        <img src={polozh} alt='' className={styles.otric} />
                        <p className={`${styles.item_text} ${styles.item_text_white}`}>
                            <strong className={`${styles.strong} ${styles.strong_white}`}>
                                Многоступенчатый ОТК с гарантией на дом от 5 лет. Все поставщики газосиликата, кирпича и керамическог  о блока - &nbsp;
                            </strong>
                            проверенные и многолетние партнеры, а каждая поставка проходит жесткий контроль и только потом отправляется на стройплощадку
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item8}`}>
                        <img src={polozh} alt='' className={styles.otric} />
                        <p className={`${styles.item_text} ${styles.item_text_white}`}>
                            <strong className={`${styles.strong} ${styles.strong_white}`}>
                                В договоре четко указывается: когда и в каком виде будет сдан проект. &nbsp;
                            </strong>
                            Задержки - недопустимы, а если появляются форс-мажоры, то мы просто компенсируем их в полной мере и из своего кармана
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item9}`}>
                        <img src={polozh} alt='' className={styles.otric} />
                        <p className={`${styles.item_text} ${styles.item_text_white}`}>
                            <strong className={`${styles.strong} ${styles.strong_white}`}>
                                Отлаженная логистика, поставки, собственная бригада строителей и отдел проектирования.
                            </strong>
                            &nbsp; Поэтому контролируем все расходы и можем оценить точную стоимость проекта на старте. А не завлечь клиента низкой ценой, а потом накручивать дополнительные суммы из-за динамичной конъюнктуры рынка
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item10}`}>
                        <img src={polozh} alt='' className={styles.otric} />
                        <p className={`${styles.item_text} ${styles.item_text_white}`}>
                            <strong className={`${styles.strong} ${styles.strong_white}`}>
                                Команда квалифицированных юристов, которые не допустят проблем с документами &nbsp;
                            </strong>
                            в процессе строительства и по факту его окончания
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item11}`}>
                        <img src={polozh} alt='' className={styles.otric} />
                        <p className={`${styles.item_text} ${styles.item_text_white}`}>
                            <strong className={`${styles.strong} ${styles.strong_white}`}>
                                10-ти летний опыт работы. &nbsp;
                            </strong>
                            Постепенно и планомерно развивались, создавали партнерскую базу и качественное портфолио. На сегодня мы уже построили более 300 современных домов и привыкли решать задачи любого уровня сложности
                        </p>
                    </li>
                    <li className={`${styles.item} ${styles.item12}`}>
                        <img src={polozh} alt='' className={styles.otric} />
                        <p className={`${styles.item_text} ${styles.item_text_white}`}>
                            <strong className={`${styles.strong} ${styles.strong_white}`}>
                                Безопасность и спокойствие окружение клиента в приоритете. &nbsp;
                            </strong>
                            Мы всегда согласовываем работы, определяем оптимальный график и гарантируем отсутствие конфликтов при строительстве и использовании дома
                        </p>
                    </li>
                </ul>
            </div>
            <form className={styles.form}>
                <h3 className={styles.form_title}>
                    Закажите строительство своего дома сегодня и обезопасьте будушее
                </h3>
                <div className={styles.form_contact}>
                    <fieldset className={styles.fieldset}>
                        <div className={styles.input_wrapper}>
                            <input type='text' placeholder='Ваше имя' className={styles.input} />
                            <img alt='user' className={styles.input_img} src={user} />
                        </div>
                        <div className={styles.input_wrapper}>
                            <input type='phone' placeholder='+7 (999) 999-99-99' className={styles.input} />
                            <img alt='phone' className={styles.input_img} src={phone} />
                        </div>
                    </fieldset>
                    <div className={styles.submit_container}>
                        <div className={styles.submit_wrapper}>
                            <button className={styles.submitButton} type="submit">
                                <img src={checkbox} className={styles.checkbox} />
                            </button>
                            <div className={styles.submitText}>
                                <p className={styles.submit_text}>
                                    Я даю свое согласие на обработку
                                    персональных данных и соглашаюсь
                                </p>
                                <a className={styles.submit_text_underline} href='#'>
                                    с политикой конфиденциальности
                                </a>
                            </div>
                        </div>
                        <button className={styles.phonebtn} type='button'>
                            <img src={phoneCalling} className={styles.phoneCall} />
                            <div className={styles.bgPhoneCall}>
                                <img src={mask} className={styles.phoneCallMask} />
                                <p className={styles.phoneCallText}>Консультация</p>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default YourResult;