import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import SectionMenu from './environment/components/SectionMenu/SectionMenu';
import CONTENT from './content';

class App extends Component {
  render() {
    const {
      personal: { fullName, jobTitle },
      content: { active, collection }
    } = CONTENT;

    return (
      <div className="App">
          <Introducer
              fullName={fullName}
              jobTitle={jobTitle} />
          <SectionMenu
              active={active}
              collection={collection} />
      </div>
    );
  }
}

export default App;
