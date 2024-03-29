import React from 'react';
// import styles from './Home.module.css';
import Welcome from './Welcome/Welcome';
import SymSlides from './SymSlides/SymSlides';
import Challange from './Challange/Challange';
import Customers from './Customers/Customers';
import News from './News/News';
import Contact from '../../components/Contact/Contact';

const Home = (props) => {
    return(
        <React.Fragment>
            <Welcome />
            <SymSlides />
            <Challange />
            <Customers />
            <News />
            <Contact />
        </React.Fragment>
    );
};

export default Home;
