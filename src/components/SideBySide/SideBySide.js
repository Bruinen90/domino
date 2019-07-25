import React from 'react';
import styles from './SideBySide.module.css';
import GridItem from '../OfferGrid/GridItem/GridItem';

const SideBySide = (props) => {
      return(
          <div className={styles.container}>
            <GridItem
                title = {props.data[0].title}
                text = {props.data[0].text}
                icon={'montaz_reklam'}
            />
            <GridItem
                title = {props.data[1].title}
                text = {props.data[1].text}
                light = {true}
                img = {props.data[1].img}
                icon={'montaz_reklam'}
            />  
          </div>
      );
};

export default SideBySide;
