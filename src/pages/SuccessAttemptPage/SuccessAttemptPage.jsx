import React from 'react';
import styles from './SuccessAttemptPage.module.scss';
import CommonPage from '../../components/Common/CommonPage/CommonPage';
import { useNavigate } from 'react-router-dom';

const SuccessAttemptPage = () => {
    const navigate = useNavigate()
    return (
        <CommonPage>
            <div className={styles.title_wrapper}>
                <p className={styles.description}>Спасибо за заявку</p>
                <p className={styles.subDescription}>Спасибо за ваше сообщение, в скором времени менеджер с вами свяжиться</p>
                <button type='button' className={styles.button} onClick={() => {
                    navigate(-1)
                }}>Вернуться обратно</button>
            </div>
        </CommonPage>
    );
};

export default SuccessAttemptPage;