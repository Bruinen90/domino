import React, { Component } from 'react';
import styles from './App.module.css';
import PageContent from '../PageContent/PageContent';
import Nav from '../../components/Nav/Nav';

class App extends Component {
    render() {
        return (
            <div>
                <PageContent>
                    <Nav />
                </PageContent>
            </div>
        );
    }
}
export default App;
