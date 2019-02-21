import React from 'react';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';
import SymSlides from './SymSlides/SymSlides';

const Home = (props) => {
    return(
        <React.Fragment>
            <Welcome />
            <SymSlides />
        </React.Fragment>
    );
};

export default Home;
