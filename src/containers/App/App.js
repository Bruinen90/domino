import React, { Component } from 'react';
// import styles from './App.module.css';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <main>
                    <Nav />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        {/* <Route path='/products' exact component={Products} />
                        <Route path='/info' component={Info} />
                        <Route path='/cooperation' component={Cooperation} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        {allProducts} */}
                    </Switch>
            </main>
        );
    }
}
export default App;
