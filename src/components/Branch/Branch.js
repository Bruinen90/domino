import React from 'react';
import styles from './Branch.module.css';
import iconDark from '../../img/icons/bilboardDark.png';
import iconLight from '../../img/icons/bilboardLight.png';
import Button from '../Button/Button';

const Branch = (props) => {
    const contClasses = [styles.container];
    if(props.clicked) { contClasses.push(styles.active) };
    if(props.light) { contClasses.push(styles.light)};
    let icon = !props.light ? iconLight : iconDark;
    // props.dark ? icon = iconLight : icon = iconDark;
    return(
        <div className={contClasses.join(' ')}>
            <div className={styles.default}>
                <img src={icon} alt="Agencja reklamowa Domino" className={styles.icon}/>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
            <div className={styles.buttonCont}>
                <Button />
            </div>
        </div>
    );
};

export default Branch;
