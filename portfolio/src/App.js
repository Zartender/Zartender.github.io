import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
class App extends Component {
// Default React App Code
// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
render() {
  return (
    <div className="App">
      <Header/>
      
    </div>
  );
}






}

export default App;
