import React, { Component } from 'react';
import styles from './News.module.css';
import PageContent from '../../PageContent/PageContent';
import NewsCont from '../../../components/NewsCont/NewsCont';
import newsData from '../../../data/news.js';

class News extends Component {
    render() {
        const newsOutput = newsData.slice(0,4).map((news, index) => {
            // Prepare first 15 words of the news text
            let shortText = news.text.split(' ').slice(0, 15).join(' ');
            // Remove comas, dots etc. if occure as the last character
            if(shortText.slice(-1).match(/\W/)) {shortText = shortText.slice(0, shortText.length-1)};
            // Add ellipsis in the end
            shortText += '...';
            return(
                <NewsCont
                    date={news.date}
                    text={shortText}
                    key={index}
                />
            )
        })
        return (
            <PageContent>
                <div className={styles.container}>
                    <div className={styles.headerCont}>
                        <h2 className={styles.header}>
                            Aktualności.
                        </h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.newsCont}>
                        {newsOutput}
                    </div>
                </div>
            </PageContent>
        );
    }
}
export default News;
