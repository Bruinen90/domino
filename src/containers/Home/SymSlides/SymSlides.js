import React from 'react';
import styles from './SymSlides.module.css';
import Button from '../../../components/Button/Button';
import PageContent from '../../PageContent/PageContent';
import transparentLogo from '../../../img/transparentLogo.png';

const SymSlides = (props) => {
    return(
        <PageContent>
            <section className={styles.container}>
                <div className={styles.slides}>
                    <div className={[styles.slide, styles.leftSlide].join(' ')}>
                        <h2 className={styles.gradientHeader}>
                            Profesjonalna <br/> obsługa
                        </h2>
                        <div className={styles.gradientLine}></div>
                        <img src={transparentLogo} alt="Transparent Domino logo" className={styles.transparentLogo}/>
                    </div>
                    <div className={[styles.slide, styles.rightSlide].join(' ')}>
                        <h2 className={styles.header}>
                            Profesjonalna obsługa
                        </h2>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam iusto atque minima ipsum eligendi dolore molestiae, corporis omnis voluptas esse asperiores totam fugiat cumque temporibus animi ut, iste a recusandae.
                        </p>
                        <Button
                            width={50}
                        />
                    </div>
                </div>
            </section>
        </PageContent>
    );
};

export default SymSlides;
