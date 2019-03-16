import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../img/logo.png';

const Logo = (props) => {
    return(
        <div
            className={styles.container}
            onClick={()=>{props.history.push(`/`)}}
        >
            <img src={logo} alt="Domino Grupa Producent reklam" className={styles.img}/>
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
export default withRouter(Logo);
