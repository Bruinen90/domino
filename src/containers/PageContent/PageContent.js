import React from 'react';
import styles from './PageContent.module.css';

const PageContent = (props) => (
    <div className={styles.container}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
);
export default PageContent;
