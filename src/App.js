import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import SectionContainer from './environment/components/SectionContainer/SectionContainer';
import Contact from './environment/components/Contact/Contact';
import Footer from './environment/components/Footer/Footer';
import CONTENT from './content';

class App extends Component {
  render() {
    const {
        personal: { fullName, jobTitle },
        content, contact, stack, copyright
    } = CONTENT;

    return (
      <div className='App'>
          <Introducer
              fullName={fullName}
              jobTitle={jobTitle} />
          <SectionContainer content={content} />
          <Contact contact={contact} />
          <Footer
              stack={stack}
              copyright={copyright} />
      </div>
    );
  }
}

export default App;
