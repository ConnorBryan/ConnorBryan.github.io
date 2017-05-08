import React, { Component } from 'react';
import { Segment, Container, Image } from 'semantic-ui-react';
import './SectionFooter.css';

export default class SectionFooter extends Component {
    render () {
        const {
            stack,
            copyright: { holder, year, allRightsReserved } } = this.props;

        return (
            <Segment>
                <Container>
                    <Segment.Group piled>
                        <Segment>
                            <h3>Made using</h3>
                            <Image.Group size={stack.length}>
                                {stack.map(technology => (
                                    <Image
                                        size='tiny'
                                        alt={technology.name}
                                        src={technology.image}
                                        href={technology.link} />
                                ))}
                            </Image.Group>
                        </Segment>
                        <Segment textAlign='right'>
                            <p>Copyright &copy; {year} {holder}, {allRightsReserved ? ' all rights reserved.' : ''}</p>
                        </Segment>
                    </Segment.Group>
                </Container>
            </Segment>
        );
    }
}
