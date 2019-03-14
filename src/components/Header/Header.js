import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return(
        <h2 className={styles.container}>
            <div className={styles.text}>{props.text}</div>
        </h2>
    );
};

export default Header;
