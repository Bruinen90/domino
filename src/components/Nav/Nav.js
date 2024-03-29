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
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.navCont}>
                        <div className={styles.logoCont}>
                            <Logo />
                        </div>
                        <div className={styles.lineCont}>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.menuCont}>
                            <Menu
                                click={this.toggleHandler}
                                show={this.state.show}
                            />
                        </div>
                        <Toggler
                            click={this.toggleHandler}
                            active={this.state.show}
                        />
                    </div>
                    <div className={styles.telCont}>
                        <div className={styles.wideLine}></div>
                        <a href="tel: 793 760 997" className={styles.phone}>
                            TEL. 793 760 997
                        </a>
                    </div>
                </div>
                {this.state.show &&
                    <div
                        className={styles.cover}
                        onClick={()=>this.setState({show: false})}
                    ></div>
                }
            </div>
        );
    }
}
export default Nav;
