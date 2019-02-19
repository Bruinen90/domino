import React from 'react';
import styles from './Menu.module.css';

const Menu = (props) => {
    const menuClasses = [styles.container];
    if(props.show) {menuClasses.push(styles.show)}
    return(
        <div className={menuClasses.join(' ')}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    O nas
                </li>
                <li className={styles.item}>
                    Oferta
                </li>
                <li className={styles.item}>
                    Kontakt
                </li>
            </ul>
        </div>
    );
}
export default Menu;
