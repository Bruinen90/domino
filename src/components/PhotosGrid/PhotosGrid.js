import React from 'react';
import styles from './PhotosGrid.module.css';

const PhotosGrid = (props) => {
    const photosOutput = [];
    for(let i = 1; i <= props.photosCount; i++) {
        const url = require(`../../img/photos/${props.imgPrefix + '_' + i}.jpg`);
        photosOutput.push(
            // <div
            //     style={{backgroundImage: `url(${url})`}}
            //     alt="Wybrane realizacje"
            //     className={[
            //         styles.photo,
            //         (i+1)%3===0 && styles.centerCol,
            //         i%5===0 && styles.moveUp
            //     ].join(' ')}
            //     key={i}
            // ></div>
            <div
            style={{backgroundImage: `url(${url})`}}
            alt="Wybrane realizacje"
            className={[
                styles.photo
            ].join(' ')}
            key={i}
        ></div>
        )
    }
      return(
          <div className={styles.container}>
                {photosOutput}
          </div>
      );
};

export default PhotosGrid;
