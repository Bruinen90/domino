import React from 'react';
import styles from './Feature.module.css';
import ReactSVG from 'react-svg';

const Feature = (props) => {
    if(props.icon) { 
        const icon = require(`../../../../img/icons/${props.icon}.svg`);
        return(
            <div className={[styles.container, props.light && styles.light].join(' ')}>
                <div style={{color: `${props.active || props.light ? '#17105e' : '#41eeee'}`}}>
                        <ReactSVG
                            src={icon}
                            className={styles.icon}
                        />
                    </div>
                <div className={styles.title}>{props.title}</div>
            </div>
        );
    }
    return(
        <div className={[styles.container, props.light && styles.light].join(' ')}>
                <div className={styles.title}>{props.title}</div>
            </div>
    )
};

export default Feature;
