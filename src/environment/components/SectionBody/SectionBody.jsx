import React, { Component } from 'react';
import { Container, Segment, ItemGroup, Item } from 'semantic-ui-react';
import './SectionBody.css';

export default class SectionBody extends Component {
    render () {
        const { activeContent: { tagline, items } } = this.props;
        return (
            <Container className='SectionBody'>
                <h1>{tagline}</h1>
                <Segment>
                    <ItemGroup>
                        {items.map(item => (
                            <Item key={item.heading}>
                                <Item.Image
                                    src={item.image}
                                    size='small' />
                                <Item.Content>
                                    <h2>{item.heading}</h2>
                                    {item.text.map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </Item.Content>
                            </Item>
                        ))}
                    </ItemGroup>
                </Segment>
            </Container>
        );
    }
}