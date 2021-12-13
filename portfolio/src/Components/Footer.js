import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div>
            <header className="App-header header">

                <nav id="nav-wrap footer">
                   

                    <ul id="nav" className="nav">
                        <li><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#projects">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                  <a href="https://www.linkedin.com/in/greenblott/"> <h1>Linkedin</h1></a> 
                    
                </nav>

            </header>
            </div>
        );
    }
}

export default Footer;