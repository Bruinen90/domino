import React from 'react';
import styles from './Customers.module.css';
import PageContent from '../../PageContent/PageContent';
import Slider from '../../../components/Slider/Slider.js'

const Customers = (props) => {
    const companiesList = ['a&e', 'fox', 'hitachi', 'honda', 'nbc', 'a&e', 'fox', 'hitachi', 'honda', 'nbc', 'a&e', 'fox', 'hitachi', 'honda', 'nbc', 'a&e', 'fox', 'hitachi', 'honda', 'nbc'];
    const compCount = companiesList.length;
    const logosPerSlide = window.innerWidth > 768 ? 7 : 3;
    const slidesCount = Math.ceil(compCount / logosPerSlide);
    return(
        <PageContent>
            <div className={styles.container}>
                <div className={styles.headerCont}>
                    <h2 className={styles.gradientHeader}>
                        Do tej pory zaufali nam:
                    </h2>
                </div>
                <div className={styles.sliderCont}>
                    <Slider
                        companiesList={companiesList}
                        logosPerSlide={logosPerSlide}
                        compCount={compCount}
                        slidesCount={slidesCount}
                    />
                </div>
            </div>
        </PageContent>
    );
};

export default Customers;
