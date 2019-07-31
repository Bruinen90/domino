import React, { Component } from 'react';
// import styles from './App.module.css';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import Agency from '../Agency/Agency';
import Mounting from '../Mounting/Mounting';
import AdsProducer from '../AdsProducer/AdsProducer';
import About from '../About/About';
import ContactPage from '../ContactPage/ContactPage';
import WorkOnHeight from '../WorkOnHeight/WorkOnHeight';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <main>
                    <Nav />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/agencja_reklamowa' component={Agency} />
                        <Route path='/montaz_reklam' component={Mounting} />
                        <Route path='/uslugi_zwyzka' component={WorkOnHeight} />
                        <Route path='/producent_reklam' component={AdsProducer} />
                        <Route path='/o_nas' component={About} />
                        <Route path='/kontakt' component={ContactPage} />
                    </Switch>
            </main>
        );
    }
}
export default App;
