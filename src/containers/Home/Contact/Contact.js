import React from 'react';
import styles from './Contact.module.css';
import PageContent from '../../PageContent/PageContent';

const Contact = (props) => {
    const currYear = new Date().getFullYear();
    return(
        <PageContent>
            <div className={styles.container}>
                <div className={styles.dataCont}>
                    <div className={[styles.rec, styles.recLight].join(' ')} >
                        <img
                            src={require('../../../img/icons/phone.svg')}
                            alt="Phone number"
                            className={styles.icon}
                        />
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <h2 className={styles.phone}>
                            +48 <br/> <strong>790 230 003</strong>
                        </h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.rec}>
                        <h2 className={styles.header}>Adres</h2>
                        <div className={styles.text}>
                            Komańcza 10 <br/>
                            38-500 Sanok
                        </div>
                        <a href="mailto: biuro@dominogrupa.pl" className={styles.mail}>
                            biuro@dominogrupa.pl
                        </a>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.map}></div>
                    <div className={styles.rec}>
                        <h2 className={styles.header}>Oferta</h2>
                        <ul className={styles.list}>
                            <li className={styles.item}>producent reklam</li>
                            <li className={styles.item}>litery 3D</li>
                            <li className={styles.item}>kasetony świetlne</li>
                            <li className={styles.item}>oklejanie aut</li>
                            <li className={styles.item}>usługi wysokościowe</li>
                            <li className={styles.item}>agencja reklamowa</li>
                            <li className={styles.item}>malowanie dachów</li>
                        </ul>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <section className={styles.footer}>
                    <div className={styles.footerText}>
                        {window.innerWidth >= 768 && 'All rigths reserved'} ©{currYear} Domino Group
                    </div>
                    <div className={styles.footerLine}></div>
                    <div className={styles.socials}>
                        <a href="" className={styles.socialIcon}>f</a>
                        <a href="" className={styles.socialIcon}>in</a>
                        <a href="" className={styles.socialIcon}>t</a>
                    </div>
                </section>
            </div>
        </PageContent>
    );
};

export default Contact;
