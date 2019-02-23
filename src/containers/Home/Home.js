import React from 'react';
import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';
import SymSlides from './SymSlides/SymSlides';
import Challange from './Challange/Challange';
import Customers from './Customers/Customers';

const Home = (props) => {
    return(
        <React.Fragment>
            <Welcome />
            <SymSlides />
            <Challange />
            <Customers />
        </React.Fragment>
    );
};

export default Home;
