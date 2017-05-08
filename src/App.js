import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import SectionMenu from './environment/components/SectionMenu/SectionMenu';
import SectionBody from './environment/components/SectionBody/SectionBody';
import SectionFooter from './environment/components/SectionFooter/SectionFooter';
import CONTENT from './content';

class App extends Component {
  render() {
    const {
        personal: { fullName, jobTitle },
        content: { active, collection },
        stack, copyright } = CONTENT;

    return (
      <div className='App'>
          <Introducer
              fullName={fullName}
              jobTitle={jobTitle} />
          <SectionMenu
              active={active}
              collection={collection} />
          <SectionBody
              active={active}
              collection={collection} />
          <SectionFooter
              stack={stack}
              copyright={copyright} />
      </div>
    );
  }
}

export default App;
