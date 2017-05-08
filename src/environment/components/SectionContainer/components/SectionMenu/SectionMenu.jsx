import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import _ from 'underscore';
import S from 'string';
import './SectionMenu.css';

export default class SectionMenu extends Component {
    constructor (props) {
        super(props);
        this.state = { stuck: false };
        this.setMenuStickOnScroll();
    }

    stick () {
        this.setState({ stuck: true });
    }

    unstick () {
        this.setState({ stuck: false });
    }

    setMenuStickOnScroll () {
        window.addEventListener('scroll', _.throttle(() => {
            const { stuck } = this.state;
            const offset = window.pageYOffset;
            const mainOffset = document.getElementById('main').offsetTop;
            if (offset >= mainOffset) this.stick();
            if (offset < mainOffset - 100 && stuck) this.unstick();
        }, 150));
    }

    render () {
        const { stuck } = this.state;
        const { active, content, changeActiveSection } = this.props;
        const fixed = stuck ? 'top' : null;
        return (
            <div className='SectionMenu'>
                <div id='main' />
                <Menu
                    inverted
                    widths={2}
                    fixed={fixed}
                    pointing>
                    {content.map((section, index) => (
                        <Menu.Item
                            key={section.name}
                            name={section.name}
                            active={active === index}
                            onClick={() => changeActiveSection(index)}>
                            <i className={section.icon} /> {S(section.name).capitalize().s}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        );
    }
}