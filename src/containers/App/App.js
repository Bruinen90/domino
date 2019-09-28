import React, { Component } from 'react';
import Popup from '../../components/Popup/Popup'; 
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
    state = {
        popUpVisible: false,
        popUpImgNum: Math.ceil(Math.random()*2)
    }

    componentWillMount() {
        this.setState({popUpVisible: true})
    }

    closePopup = () => {
        this.setState({popUpVisible: false})
    }
    render() {
        return (
            <>
                <Popup 
                    visible={this.state.popUpVisible}
                    clickClose={this.closePopup}
                    imgToShow={this.state.popUpImgNum}
                />
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
            </>
        );
    }
}
export default App;
