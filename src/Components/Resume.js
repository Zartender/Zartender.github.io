import React, { Component } from 'react';
import logo from './logo.svg';

class Resume extends Component {
    render() {
        return (
           <div>
               <h1>Resume</h1>
                <h2 id="resume">
                    Click on either tiny spinning React logo to view my resume.
                </h2>      
                <a href='href="https://docs.google.com/document/d/1N-qp7MpzoxrnZTNS9zlYbUYXFYh0eDxIgXcYr52rV-Y/edit?usp=sharing"'><img src={logo} className="App-logo-mini" alt="logo"/></a>
                <a href='href="https://docs.google.com/document/d/1N-qp7MpzoxrnZTNS9zlYbUYXFYh0eDxIgXcYr52rV-Y/edit?usp=sharing"'><img src={logo} className="App-logo-mini" alt="logo"/></a>
                
            </div>
        );
    }
}

export default Resume;