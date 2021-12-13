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
                        <li><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#projects">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                    <h1>Ian Greenblott</h1>
                    <h6>Scroll around</h6>
                </nav>
                <p>
                  <img src={logo} className="App-logo-mini" alt="logo" />
                </p>        <a
                    className="App-link"
                    href="https://github.com/Zartender"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My Github Profile
                </a>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </header>
            </div>
        );
    }
}

export default Header;