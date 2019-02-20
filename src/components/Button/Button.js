import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return(
        <div className={styles.container}>
            Zobacz więcej
            <span className={styles.plus}>+</span>
        </div>
    );
};

export default Button;
