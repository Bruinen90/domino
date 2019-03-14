import React from 'react';
import styles from './Feature.module.css';
// import iconDark from '../../../../img/icons/bilboardDark.png';
import iconLight from '../../../../img/icons/bilboardLight.png';

const Feature = (props) => {
    return(
        <div className={[styles.container, props.light && styles.light].join(' ')}>
            {!props.light && <img src={iconLight} alt="Oferta" className={styles.icon}/>}
            <div className={styles.title}>{props.title}</div>
        </div>
    );
};

export default Feature;
