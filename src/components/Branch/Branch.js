import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Branch.module.css';
import iconDark from '../../img/icons/bilboardDark.png';
import iconLight from '../../img/icons/bilboardLight.png';
import Button from '../Button/Button';

const Branch = (props) => {
    const contClasses = [styles.container];
    let icon = !(props.light || props.active) ? iconLight : iconDark;
    return(
        <div
            className={[
                styles.container,
                (props.light || props.active) && styles.light,
                props.active && styles.active,
                props.solid && styles.solid,
            ].join(' ')}
            onClick={()=>{props.history.push(`/${props.target}`)}}
        >
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

export default withRouter(Branch);
