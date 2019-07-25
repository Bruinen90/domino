import React from 'react';
import styles from './OfferLinks.module.css';
import Header from '../Header/Header';
import Branch from '../Branch/Branch';

const OfferLinks = (props) => {
    const linksList = [
        {
            text: 'Producent reklam',
            target: 'producent_reklam',
        },
        {
            text: 'Agencja reklamowa',
            target: 'agencja_reklamowa',
        },
        {
            text: 'Montaż reklam',
            target: 'montaz_reklam',
        },
        {
            text: 'Usługi wysokościowe',
            target: 'montaz_reklam',
        },
        ];
    const linksOutput = linksList.map(link => {
        return(
            <Branch
                description = {link.text}
                target = {link.target}
                key = {link.text}
                solid = {true}
                active = {props.active === link.target}
            />
        )
    })
      return(
          <div className={styles.container}>
            <Header
                text = {props.specialHeader || "Sprawdź co jeszcze możemy dla Ciebie zrobić"}
                wide = {true}
            />
            <div className={styles.linksGrid}>
                {linksOutput}
            </div>
          </div>
      );
};

export default OfferLinks;
