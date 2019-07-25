import React from 'react';
import styles from './Challange.module.css';
import PageContent from '../../PageContent/PageContent';
import ChallangeBlock from '../../../components/ChallangeBlock/ChallangeBlock';

const Challange = (props) => {
    return(
        <PageContent>
            <div className={styles.container}>
                <div className={styles.headerCont}>
                    <h2 className={styles.gradientHeader}>
                        Jesteśmy gotowi na wszystkie wasze wyzwania. <br />
                        Zawsze.
                    </h2>
                    <div className={styles.gradientLine}></div>
                </div>
                <div className={styles.grid}>
                    <ChallangeBlock
                        number="3409"
                        title="wykonanych liter 3D"
                        icon="wykonanych_liter_3d"
                    />
                    <ChallangeBlock
                        number="70k"
                        title={`wydrukowanych m² bannerów`}
                        icon="wydrukowanych_banerow"
                    />
                    <div className={styles.desktopFill}></div>
                    <ChallangeBlock
                        number="400"
                        title="realizacji na wysokości"
                        icon="montaz_reklam"
                        moveLeft={true}
                    />
                    <ChallangeBlock
                        number="1mln"
                        title="wydrukowanych sztuk ulotek"
                        icon="wydrukowanych_ulotek"
                    />
                    <ChallangeBlock
                        number="248"
                        title="pomalowanych dachów"
                        icon="pomalowanych_dachow"
                    />

                    <div className={styles.seeMore}>
                        Zobacz więcej
                        <span className={styles.plus}>+</span>
                    </div>

                </div>
            </div>
        </PageContent>
    );
};

export default Challange;
