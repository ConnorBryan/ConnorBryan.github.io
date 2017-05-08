import React, { Component } from 'react';
import { Container, ItemGroup, Item, Divider } from 'semantic-ui-react';
import S from 'string';
import './SectionBody.css';

class SectionBody extends Component {
    render() {
        const { active, collection } = this.props;
        const activeSection = collection[active];
        const { name, items } = activeSection;

        return (
            <div className='SectionBody'>
                <Container>
                    <h1>{S(name).capitalize().s}</h1>
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
                </Container>
            </div>
        );
    }
}

export default SectionBody;
