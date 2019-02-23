import React from 'react';
import styles from './Logo.module.css';

const Logo = (props) => {
    return(
        <div className={styles.container}>
            <img
                src={require(`../../../img/logos/${props.name}.svg`)}
                alt={`${props.name} logo`}
                className={styles.logo}
            />
        </div>
    );
};

export default Logo;
