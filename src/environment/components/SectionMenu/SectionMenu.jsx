import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import S from 'string';
import './SectionMenu.css';

export default class extends Component {
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
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            const mainOffset = document.getElementById('main').offsetTop;
            offset >= mainOffset ? this.stick() : this.unstick();
        });
    }

    render () {
        const { stuck } = this.state;
        const { active, collection } = this.props;
        const fixed = stuck ? 'top' : null;
        return (
            <div className='SectionMenu'>
                <div id='main' />
                <Menu
                    widths={3}
                    fixed={fixed}
                    pointing>
                    {collection.map((section, index) => (
                        <Menu.Item
                            key={section.name}
                            name={section.name}
                            active={active === index}>
                            <i className={section.icon} /> {S(section.name).capitalize().s}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        );
    }
}