import React, { Component } from 'react';
import { Container, Segment, ItemGroup, Item } from 'semantic-ui-react';
import './SectionBody.css';

class SectionBody extends Component {
    render() {
        const { active, collection } = this.props;
        const activeSection = collection[active];
        const { tagline, items } = activeSection;

        return (
            <div className='SectionBody'>
                <Container>
                    <h1>{tagline}</h1>
                    <Segment>
                        <ItemGroup>
                            {items.map(item => (
                                <Item>
                                    <Item.Image
                                        src={item.image}
                                        size='small' />
                                    <Item.Content>
                                        <h2>{item.heading}</h2>
                                        {item.text.map(line => (
                                            <p>{line}</p>
                                        ))}
                                    </Item.Content>
                                </Item>
                            ))}
                        </ItemGroup>
                    </Segment>
                </Container>
            </div>
        );
    }
}

export default SectionBody;
