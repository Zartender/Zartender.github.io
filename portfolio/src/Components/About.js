import React, { Component } from 'react';
import logo from './logo.svg';

class About extends Component {
    render() {
        return (
            <div className="App-header">

                <div id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <h1>Technologies</h1>
                    
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Technology 1</a></li>
                        <li><a className="smoothscroll" href="#about">Technology 2</a></li>
                        <li><a className="smoothscroll" href="#resume">Technology 3</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Technology 4</a></li>
                        <li><a className="smoothscroll" href="#contact">Technology 5</a></li>
                    </ul>
                    <h2>About</h2>
                </div>


                <p>
                    This is the About Page.
                </p>        <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default About;