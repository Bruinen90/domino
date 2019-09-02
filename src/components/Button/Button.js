import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = (props) => {
    const style = {
        width: props.width + '%',
    }
    return(
        <Link
            className={[styles.container, props.dark && styles.dark].join(' ')}
            style={style}
            to={props.target || '#'}
        >
            {props.caption ? props.caption : 'Zobacz więcej'}
            <span className={styles.plus}>+</span>
        </Link>
    );
};

export default Button;
