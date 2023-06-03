import React from 'react';
import styles from './NotFoundPage.module.scss';
import CommonPage from '../../components/Common/CommonPage/CommonPage';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <CommonPage>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>404</h2>
                    <p className={styles.description}>Ой, страница не найдена</p>
                    <p className={styles.subDescription}>Похоже, мы не можем найти нужную вам страницу</p>
                    <button type='button' className={styles.button} onClick={() => {
                        navigate(-1)
                    }}>Вернуться обратно</button>
                </div>
            </CommonPage>
        </>
    );
};

export default NotFoundPage;