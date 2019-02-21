import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const style = {
        width: props.width + '%',
    }
    return(
        <div className={styles.container} style={style}>
            Zobacz więcej
            <span className={styles.plus}>+</span>
        </div>
    );
};

export default Button;
