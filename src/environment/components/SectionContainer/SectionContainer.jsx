import React, { Component } from 'react';
import SectionMenu from './components/SectionMenu/SectionMenu';
import SectionBody from './components/SectionBody/SectionBody';
import './SectionContainer.css';

export default class SectionContainer extends Component {
    constructor (props) {
        super(props);
        this.state = { active: 0 };
        this.changeActiveSection = this.changeActiveSection.bind(this);
    }

    changeActiveSection (index) {
        const mainOffset = document.getElementById('main').offsetTop;
        window.scrollTo(0, mainOffset);
        this.setState({ active: index });
    }

    render () {
        const { active } = this.state;
        const { content } = this.props;
        const activeContent = content[active];
        return (
            <div className='SectionContainer'>
                <SectionMenu
                    active={active}
                    content={content}
                    changeActiveSection={this.changeActiveSection} />
                <SectionBody activeContent={activeContent} />
            </div>
        );
    }
}