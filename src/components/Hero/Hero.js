import React from 'react';
import styles from './Hero.module.css';
import background from '../../img/welcomeBck.jpg';
import PageContent from '../../containers/PageContent/PageContent';
import FeaturesList from './FeaturesList/FeaturesList';

const Hero = (props) => {
    const backgroundImg = require(`../../img/backgrounds/${props.img}.jpg`);
    return(
        <div
            className={styles.container}
            style={{
                backgroundImage: `url(${backgroundImg})`,
                height: window.innerWidth < 769 ? window.innerHeight + 'px' :
                    window.innerHeight - 50 + 'px'
            }}
        >
            <PageContent>
                <div className={styles.headerCont}>
                    <h1 className={styles.mainHeader}>
                        {props.mainHeader}
                    </h1>
                </div>
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
