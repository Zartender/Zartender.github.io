import React, { Component } from 'react';
import logo from './logo.svg';

class About extends Component {
    render() {
        return (
           <div>
                <h2 id="about">This is the About Page.</h2>      
                <h1>About</h1>
                <p>This is version one of my portfolio. Version two will be have captivating visuals, convincing project links consolidated css, and impressive "everything".</p>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default About;