import React, { Component } from 'react';
import { Container, Grid, Segment, Divider, Message, Icon } from 'semantic-ui-react';
import './Contact.css';

export default class Contact extends Component {
    render () {
        const { contact: { phone, email, location, github, linkedin } } = this.props;
        return (
            <Container className='Contact'>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={8}>
                            <Segment>
                                <h3>Get in contact</h3>
                                <Divider />
                                <Message
                                    size='large'
                                    icon='mobile'
                                    header='Call or text'
                                    content={phone} />
                                <Message
                                    size='large'
                                    icon='mail'
                                    header='Shoot me an email'
                                    content={email} />
                                <Message
                                    size='large'
                                    icon='marker'
                                    header="Where I'm at"
                                    content={location} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column
                            className='social-media'
                            mobile={16}
                            tablet={8}>
                            <Segment>
                                <h3>Find me on the web</h3>
                                <Divider />
                                <Grid
                                    columns={2}
                                    textAlign='center'>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Message size='large'>
                                                <Message.Header>
                                                    <h1>
                                                        <Icon name='github' /> <a href={github}>GitHub</a>
                                                    </h1>
                                                </Message.Header>
                                            </Message>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Message size='large'>
                                                <Message.Header>
                                                    <h1>
                                                        <Icon name='linkedin' /> <a href={linkedin}>LinkedIn</a>
                                                    </h1>
                                                </Message.Header>
                                            </Message>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
