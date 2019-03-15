import React from 'react';
import styles from './GridItem.module.css';
import iconDark from '../../../img/icons/bilboardDark.png';
import iconLight from '../../../img/icons/bilboardLight.png';

const GridItem = (props) => {
    return(
        <div className={[styles.container, props.light && styles.light].join(' ')}>
            <div className={styles.headerCont}>
                <img
                    src={props.light ? iconDark : iconLight}
                    alt="Oferta"
                    className={styles.icon}
                />
                <div className={styles.line}></div>
                <h3 className={styles.header}>{props.title}</h3>
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    );
};

export default GridItem;
