import React from 'react';
import styles from './Reviews.module.scss';

const Reviews = () => {
    return (
        <section className={styles.section}>
            <div className={styles.up}>
                <h2 className={styles.title}>Видео отзывы от наших клиентов</h2>
                <div className={styles.buttons}>
                    <button type='button' className={styles.button}>
                        <div className={styles.btn_wrapper}>
                            {`<`}
                        </div>
                    </button>
                    <button type='button' className={styles.button}>
                        <div className={styles.btn_wrapper}>
                            {`>`}
                        </div>
                    </button>
                </div>
            </div>
            <div className={styles.iframes}>
                <iframe id="ytplayer" type="text/html" width="344" height="463"
                    src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                    frameborder="0" />
                <iframe id="ytplayer" type="text/html" width="344" height="463"
                    src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                    frameborder="0" />
                <iframe id="ytplayer" type="text/html" width="344" height="463"
                    src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                    frameborder="0" />
                <iframe id="ytplayer" type="text/html" width="344" height="463"
                    src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                    frameborder="0" />
            </div>
        </section>
    );
};

export default Reviews;