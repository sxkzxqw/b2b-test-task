import React from 'react';
import styles from './VideoBlogs.module.scss';
import left from '../../assets/images2/videoBlogs/left.png';
import right from '../../assets/images2/videoBlogs/right.png';

const VideoBlogs = () => {
    return (
        <section className={styles.section}>
            <img src={left} alt='domiki' className={styles.left} />
            <img src={right} alt='domiki' className={styles.right} />
            <div className={styles.container}>
                <div className={styles.up}>
                    <h2 className={styles.title}>Видео блоги о наших проектах</h2>
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
                    <iframe id="ytplayer" type="text/html" width="344" height="238"
                        src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                        frameborder="0" />
                    <iframe id="ytplayer" type="text/html" width="344" height="238"
                        src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                        frameborder="0" />
                    <iframe id="ytplayer" type="text/html" width="344" height="238"
                        src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                        frameborder="0" />
                    <iframe id="ytplayer" type="text/html" width="344" height="238"
                        src="https://www.youtube.com/embed/lJIrF4YjHfQ"
                        frameborder="0" />
                </div>
            </div>
        </section>
    );
};

export default VideoBlogs;