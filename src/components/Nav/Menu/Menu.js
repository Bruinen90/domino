import React from 'react';
import styles from './Menu.module.css';
import {NavLink, Link} from 'react-router-dom';

const Menu = (props) => {
    const menuClasses = [styles.container];
    if(props.show) {menuClasses.push(styles.show)}
    return(
        <div className={menuClasses.join(' ')}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to='/o_nas'
                        activeClassName={styles.activeLink}
                        onClick={props.click}
                    >
                        o nas
                    </NavLink>
                </li>
                <li className={[styles.item, styles.offerLink].join(' ')}>
                    <a>
                        oferta
                    </a>
                    <ul className={styles.offerOptions}>
                        <li className={styles.offerOption}>
                            <Link
                                to='/producent_reklam'
                                onClick={props.click}
                            >
                                Producent reklam
                            </Link>
                        </li>
                        <li className={styles.offerOption}>
                            <Link
                                to='/agencja_reklamowa'
                                onClick={props.click}
                            >
                                Agencja reklamowa
                            </Link>
                        </li>
                        <li className={styles.offerOption}>
                            <Link
                                to='/montaz_reklam'
                                onClick={props.click}
                            >
                                Montaż reklam
                            </Link>
                        </li>
                        <li className={styles.offerOption}>
                            <Link
                                to='/montaz_reklam'
                                onClick={props.click}
                            >
                                Usługi wysokościowe
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to='/kontakt'
                        activeClassName={styles.activeLink}
                        onClick={props.click}
                    >
                        kontakt
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Menu;
