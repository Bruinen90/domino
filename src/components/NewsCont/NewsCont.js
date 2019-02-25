import React from 'react';
import styles from './NewsCont.module.css';

const NewsCont = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.date}>
                {props.date}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
            <div className={styles.footer}>
                <div className={styles.line}></div>
                <div className={styles.arrow}>▶</div>
            </div>
        </div>
    );
};

export default NewsCont;
