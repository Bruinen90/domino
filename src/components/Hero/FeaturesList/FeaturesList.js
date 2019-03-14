import React from 'react';
import styles from './FeaturesList.module.css';
import Feature from './Feature/Feature';

const FeaturesList = (props) => {
    const featuresOutput = props.featuresData.map(feature => {
        return (
            <Feature
                title = {feature}
                key = {feature}
            />
        )
    })
    return(
        <div className={styles.container}>
            <Feature
                light = {true}
                title = {props.lightTitle}
            />
            {featuresOutput}
        </div>
    );
};

export default FeaturesList;
