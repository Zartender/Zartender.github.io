import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
            <header className="App-header">

                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                    <h1>Ian Greenblott</h1>
                </nav>


                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>        <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            </div>
        );
    }
}

export default Header;