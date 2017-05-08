import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import './Introducer.css';

export default class Introducer extends Component {
    scrollToContent () {
        const overviewOffset = document.getElementById('overview').offsetTop;
        window.scrollTo(0, overviewOffset);
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