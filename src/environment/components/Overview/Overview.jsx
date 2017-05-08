import React, { Component } from 'react';
import { Container, Segment, Item, Comment } from 'semantic-ui-react';
import './Overview.css';

export default class Overview extends Component {
    render () {
        const { overview: { avatar, text } } = this.props;
        return (
            <Container
                fluid
                id='overview'
                className='Overview'>
                <Container>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Image
                                    src={avatar}
                                    size='medium'/>
                                <Item.Content>
                                    <Item.Header>Overview</Item.Header>
                                    <Item.Description className='description'>{text}</Item.Description>
                                    <Segment>
                                        <Comment.Group>
                                            <Comment>
                                                <Comment.Avatar src='/images/susan.jpg' />
                                                <Comment.Content>
                                                    <Comment.Author>Susan Owens</Comment.Author>
                                                    <Comment.Metadata>March 2016</Comment.Metadata>
                                                    <Comment.Text>"I would recommend Connor to assist you with growth and expansion of your business by means of technology. He was able to assist me with a solution to communicate with clients and staff via a secure server. We can upload files, video and other secure documents safely."</Comment.Text>
                                                </Comment.Content>
                                            </Comment>
                                        </Comment.Group>
                                    </Segment>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                </Container>
            </Container>
        );
    }
}