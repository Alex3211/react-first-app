import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import Greetings from '../Greetings/Greetings';
import Square from '../Square/Square';
import Pokemon from '../Pokemon/Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon></Pokemon>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greetings name={'Hello World'}></Greetings>
          <Square></Square>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
