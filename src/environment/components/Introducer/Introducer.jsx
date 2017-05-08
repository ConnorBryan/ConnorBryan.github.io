import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import './Introducer.css';

export default class Introducer extends Component {
    scrollToContent () {
        const mainOffset = document.getElementById('main').offsetTop;
        window.scrollTo(0, mainOffset);
    }

    render () {
        const { fullName, jobTitle } = this.props;

        return (
            <div className='Introducer'>
                <Segment
                    compact
                    secondary
                    padded
                    textAlign='center'>
                    <h1>{fullName}</h1>
                    <h2>{jobTitle}</h2>
                    <Button
                        fluid
                        onClick={this.scrollToContent}>
                        <Button.Content visible>
                            Get to know me <i className='fa fa-caret-down' />
                        </Button.Content>
                    </Button>
                </Segment>
            </div>
        );
    }
}