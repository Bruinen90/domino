import React from 'react';
import styles from './Popup.module.css';

import img1 from './img/img1.png';
import img2 from './img/img2.png';

import closeIcon from '../../img/icons/close.svg';

const Popup = ({ clickClose, visible, imgToShow }) => (
    <div className={[styles.wrapper, !visible && styles.hidden].join(' ')}>
        <div className={styles.cover} onClick={clickClose}></div>
        <div className={styles.container}>
            <img src={imgToShow === 1 ? img1 : img2} className={styles.img} alt=""/>
            <div className={styles.closeBox} onClick={clickClose}>
                <img src={closeIcon} alt="" className={styles.closeIcon} />
            </div>
        </div>
    </div>
) 
export default Popup;
