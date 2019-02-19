import React, { Component } from 'react';
import styles from './Nav.module.css';
import Logo from '../Logo/Logo';
import Toggler from './Toggler/Toggler';
import Menu from './Menu/Menu';

class Nav extends Component {
    state = {
        show: false,
    }

    toggleHandler = () => {
        this.setState({show: !this.state.show})
    }
    render() {
        return (
            <div className={styles.container}>
                <Logo />
                <Toggler
                    click={this.toggleHandler}
                    active={this.state.show}
                />
                <Menu
                    click={this.toggleHandler}
                    show={this.state.show}
                />
            </div>
        );
    }
}
export default Nav;
