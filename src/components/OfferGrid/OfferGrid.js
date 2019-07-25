import React from 'react';
import styles from './OfferGrid.module.css';
import GridItem from './GridItem/GridItem';

const OfferGrid = (props) => {
    const gridOutput = props.gridItems.map((item, index) => {
        return(
            <GridItem
                title = {item.title}
                text = {item.text}
                light = {item.light || props.light}
                icon = {item.icon}
                key = {index}
            />
        )
    })
    return(
        <div className={styles.container}>
            {gridOutput}
        </div>
    );
};

export default OfferGrid;
