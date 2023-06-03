import React from 'react';
import styles from './AboutCompany.module.scss';
import chel from '../../assets/images2/aboutCompany/chel.png';
import galki from '../../assets/images2/aboutCompany/galki.png';
import podpis from '../../assets/images2/aboutCompany/podpis.png';
import gori from '../../assets/images2/aboutCompany/gori.png';
import kust from '../../assets/images2/aboutCompany/kust.png';

const AboutCompany = () => {
    return (
        <section className={styles.section}>
            <img src={gori} alt='' className={styles.gori} />
            <img src={kust} alt='' className={styles.kust} />
            <div className={styles.left}>
                <img src={chel} alt='chel' className={styles.chel} />
                <img src={galki} alt='galki' className={styles.galki} />
                <div className={styles.podpis_wrapper}>
                    <div className={styles.name_wrapper}>
                        <div className={styles.border}></div>
                        <p className={styles.name}>Ефимов Платон Артурович</p>
                    </div>
                    <p className={styles.dolzhnost}>Генеральный директор строительной компании "DOMA.VRN"</p>
                    <img src={podpis} alt='podpis' className={styles.podpis} />
                </div>
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>
                    О компании которая умеет проектировать и строить
                </h2>
                <p className={styles.text}>
                    <strong className={styles.strong}>
                        «DOMA.VRN - это семейный бизнес и дело всей жизни. Наша философия заключается в том, чтобы полностью отдаваться своему ремеслу, &nbsp;
                    </strong>
                    обеспечить безопасность и успех услуг малоэтажного строительства на основе страхования.
                </p>
                <p className={styles.text}>
                    <strong className={styles.strong}>
                        Мы делаем изящные архитектурные проекты и реализовываем самые смелые дизайнерские решения, вынося на первое место соблюдение сроков, качество, &nbsp;
                    </strong>
                    функциональность и эстетику. А в случае возникновения каких‑либо проблем,берём на себя все расходы и компенсируем ущерб.
                </p>
                <p className={styles.text}>
                    <strong className={styles.strong}>
                        Заключив с нами договор, Клиенты получают не просто высококлассных исполнителей и гарантии компетентной организации, &nbsp;
                    </strong>
                    но и надёжных партнёров, а также хороших друзей»
                </p>
                <a className={styles.underline} href='#'>
                    Написать нам письмо на почту
                </a>
            </div>
        </section>
    );
};

export default AboutCompany;