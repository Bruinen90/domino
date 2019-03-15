import React from 'react';
import styles from './TextWithButton.module.css';
import Button from '../Button/Button';

const TextWithButton = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                {props.text}
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
