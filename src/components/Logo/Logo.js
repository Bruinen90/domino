import React from 'react';
import styles from './Logo.module.css';
import logo from '../../img/logo.png'

const Logo = (props) => {
    return(
        <div className={styles.container}>
            <img src={logo} alt="" className={styles.img}/>
            <div className={styles.name__cont}>
                <h2 className={styles.name__header}>
                    <span className={styles.name__headerBold}>Domino </span>
                    Grupa
                </h2>
                <h3 className={styles.name__subTitle}>
                    Producent reklam
                </h3>
            </div>
        </div>
    );
}
export default Logo;
