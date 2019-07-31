import React from 'react';
import styles from './TextWithButton.module.css';
import Button from '../Button/Button';

const TextWithButton = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <p>{props.text}</p>
            </div>
            <div className={styles.buttonCont}>
                <Button
                    caption = {props.button}
                    // width = {60}
                    dark = {true}
                />
            </div>
        </div>
    );
};

export default TextWithButton;
