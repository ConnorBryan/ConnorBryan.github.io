import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import Overview from './environment/components/Overview/Overview';
import SectionContainer from './environment/components/SectionContainer/SectionContainer';
import Contact from './environment/components/Contact/Contact';
import Footer from './environment/components/Footer/Footer';
import CONTENT from './content';

class App extends Component {
  render() {
    const {
        personal: { fullName, jobTitle, overview },
        content, contact, stack, copyright
    } = CONTENT;

    return (
      <div className='App'>
          <Introducer
              fullName={fullName}
              jobTitle={jobTitle} />
          <Overview overview={overview} />
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
