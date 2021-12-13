import React, { Component } from 'react';
// import logo from './logo.svg';

class Projects extends Component {
    render() {
        return (
           <div>
               <section>
               <h1>Resume</h1>
                <h2 id="projects">
                   Click on the links to view my projects
                </h2>      
                <a href=" https://tempo-workout.herokuapp.com/exercise?id=61aaf3bd9c199457680c3c2e"><h5>Fitness Tracker: Tempo</h5></a>
                <a href="https://ginseng-pirate-12.herokuapp.com/"><h5>Round Table</h5></a>
                <a href="https://www.youtube.com/watch?v=rEp-_BkLpWU"><h5>Employee Content Management System</h5></a>
                <a href=" https://youtu.be/b9s8g3PJ8do"><h5>Team Profile Generator</h5></a>
                </section>
            </div>
        );
    }
}

export default Projects;