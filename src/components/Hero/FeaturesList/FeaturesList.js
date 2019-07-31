import React from 'react';
import styles from './FeaturesList.module.css';
import Feature from './Feature/Feature';

const FeaturesList = (props) => {
    let featuresData = props.featuresData;
    if(!featuresData[0].title) {
        featuresData = [
            {
                title: 'projekt',
                icon: 'projekt',
            },
            {
                title: 'akceptacja',
                icon: 'akceptacja',
            },
            {
                title: 'realizacja',
                icon: 'realizacja',
            },
        ]
    }
    const featuresOutput = featuresData.map(feature => {
        return (
            <Feature
                title = {feature.title}
                icon = {feature.icon}
                key = {feature.title}
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
