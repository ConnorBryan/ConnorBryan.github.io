import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Introducer/>
      </div>
    );
  }
}

export default App;
