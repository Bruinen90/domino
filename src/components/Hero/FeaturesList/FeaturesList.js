import React from 'react';
import styles from './FeaturesList.module.css';
import Feature from './Feature/Feature';

const FeaturesList = (props) => {
    const featuresData = [
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
    const featuresOutput = featuresData.map(feature => {
        return (
            <Feature
                title = {feature.title}
                icon = {feature.icon}
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
