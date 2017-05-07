import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';
import './Introducer.css';

export default class extends Component {
    render () {
        const { fullName, jobTitle } = this.props;

        return (
            <div className='Introducer'>
                <Container >
                    <Segment textAlign='center'>
                        <h1>{fullName}</h1>
                        <h2>{jobTitle}</h2>
                        <Button animated fluid>
                            <Button.Content visible>
                                <h3><i className='fa fa-caret-down' /></h3>
                            </Button.Content>
                            <Button.Content hidden>
                                Learn more
                            </Button.Content>
                        </Button>
                    </Segment>
                </Container>
            </div>
        );
    }
}