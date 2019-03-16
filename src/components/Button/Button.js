import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Button.module.css';

const Button = (props) => {
    const style = {
        width: props.width + '%',
    }
    return(
        <div
            className={[styles.container, props.dark && styles.dark].join(' ')}
            style={style}
            onClick={()=>{props.history.push(`/${props.target}`)}}
        >
            {props.caption ? props.caption : 'Zobacz więcej'}
            <span className={styles.plus}>+</span>
        </div>
    );
};

export default withRouter(Button);
