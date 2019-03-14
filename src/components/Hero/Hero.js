import React from 'react';
import styles from './Hero.module.css';
import background from '../../img/welcomeBck.jpg';
import PageContent from '../../containers/PageContent/PageContent';
import FeaturesList from './FeaturesList/FeaturesList';

const Hero = (props) => {
    return(
        <div
            className={styles.container}
            style={{
                backgroundImage: `url(${background})`,
                height: window.innerHeight < 769 ? window.innerHeight + 'px' :
                        '80vh'
            }}
        >
            <PageContent>
                <h1 className={styles.mainHeader}>
                    {props.mainHeader}
                </h1>
                <div className={styles.featuresCont}>
                    <FeaturesList
                        featuresData = {props.featuresList}
                        lightTitle = {props.lightTitle}
                    />
                </div>
            </PageContent>
        </div>
    );
};

export default Hero;
