import React, { Component } from 'react';
import { Container, Segment, Item } from 'semantic-ui-react';
import './Overview.css';

export default class Overview extends Component {
    render () {
        const { overview: { avatar, text } } = this.props;
        return (
            <Container
                id='overview'
                className='Overview'>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image src={avatar} size='medium'/>
                            <Item.Content>
                                <Item.Header>Overview</Item.Header>
                                <Item.Description>{text}</Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Container>
        );
    }
}