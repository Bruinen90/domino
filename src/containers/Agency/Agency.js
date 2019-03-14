import React from 'react';
import styles from './Agency.module.css';
import Hero from '../../components/Hero/Hero';
import PageContent from '../PageContent/PageContent';
import Header from '../../components/Header/Header';

const Agency = (props) => {
    return(
        <div className={styles.container}>
            <Hero
                mainHeader = "Agencja reklamowa 360°"
                lightTitle = "Jak działamy?"
                featuresList = {['projekt', 'akceptacja', 'realizacja']}
            />
            <PageContent>
                <Header
                    text = "Od projektu po realizacje"
                />
            </PageContent>
        </div>
    );
};

export default Agency;
