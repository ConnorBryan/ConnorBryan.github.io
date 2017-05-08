import React, { Component } from 'react';
import { Container, Grid, Image, Message } from 'semantic-ui-react';
import './Contact.css';

export default class Contact extends Component {
    render () {
        const { contact: { phone, email, location } } = this.props;
        return (
            <Container className='Contact'>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image
                                src='/images/avatar.jpg'
                                bordered />
                        </Grid.Column>
                        <Grid.Column>
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
