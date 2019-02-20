import React from 'react';
import styles from './Home.module.css';
import background from '../../img/welcomeBck.jpg';
import PageContent from '../PageContent/PageContent';
import Branch from '../../components/Branch/Branch';

const Home = (props) => {
    return(

    <div
        className={styles.container}
        style={{backgroundImage: `url(${background})`, height: window.innerHeight + 'px'}}
    >
        <PageContent>
            <div className={styles.content}>
                <h2 className={styles.slogan}>
                    Profesjonalna obsługa
                </h2>
                <div className={styles.mainBranch}>
                    <Branch
                        description='Producent reklam'
                    />
                    <Branch
                        description='Agencja reklamowa'
                    />
                    <Branch
                        description='Montaż reklam'
                    />
                    <Branch
                        description='Usługi wysokościowe'
                    />

                </div>
            </div>
        </PageContent>
    </div>
);}
export default Home;
