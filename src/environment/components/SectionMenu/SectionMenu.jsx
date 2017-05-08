import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import S from 'string';
import './SectionMenu.css';

export default class extends Component {
    render () {
        const { active, collection } = this.props;
        return (
            <div className='SectionMenu'>
                <Menu widths={3} pointing>
                    {collection.map((section, index) => (
                        <Menu.Item
                            key={section.name}
                            name={section.name}
                            active={active === index}>
                            {S(section.name).capitalize().s}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        );
    }
}