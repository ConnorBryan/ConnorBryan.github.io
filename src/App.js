import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import CONTENT from './content';

class App extends Component {
  render() {
    const {
      personal: { fullName, jobTitle }
    } = CONTENT;

    return (
      <div className="App">
          <Introducer
              fullName={fullName}
              jobTitle={jobTitle} />
      </div>
    );
  }
}

export default App;
