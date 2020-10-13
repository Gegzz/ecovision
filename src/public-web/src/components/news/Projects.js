import React from 'react'
import { Section, Container, Columns, Content, Hero } from 'react-bulma-components'
import { Left, Bottom, Kids, Kids2 } from '../../assets'

const Projects = () => (
    <Section>
        <Container>
            <Columns mobile>
                <Columns.Column size="half">
                    <Hero color="primary" style={{ backgroundImage: `url(${Left})`, backgroundPositionX: '25%', height: '40rem' }}>
                        <Hero.Body>
                            <Content>
                                <h1>{'Private Expeditions'.toUpperCase()}</h1>
                                <h5>Pick the travel dates that work for you.
                                Our travel specialists will do the legwork,
                                checking availability and taking care of all
                                the logistics. Explore with private guides.
                                Private or shared local guides accompany you
                                throughout your trip, enriching your experience
                                    with their knowledge and insights.</h5>
                            </Content>
                        </Hero.Body>
                    </Hero>
                </Columns.Column>
                <Columns.Column size="half">
                    <Columns>
                        <Columns.Column size="half">
                            <Hero color="primary" size="large" style={{ backgroundImage: `url(${Kids})`, backgroundPositionX: '38%', backgroundPositionY: '55%', backgroundSize: 'cover', height: '18rem' }}>
                                <Hero.Body style={{ padding: '1rem 1.5rem' }}>
                                    <Content>
                                        <h1>{'Kids are becoming the teachers during the pandemic.'.toUpperCase()}</h1>
                                        <h5>“Her instinct was to try to solve problems
                                            instead of worrying about problems.”</h5>
                                    </Content>
                                </Hero.Body>
                            </Hero>
                        </Columns.Column>
                        <Columns.Column size="half">
                            <Hero color="primary" size="large" style={{ backgroundImage: `url(${Kids2})`, backgroundPositionX: '38%', backgroundPositionY: '55%', backgroundSize: 'cover', height: '18rem' }}>
                                <Hero.Body style={{ padding: '1rem 1.5rem' }} />
                            </Hero>
                        </Columns.Column>
                        <Columns.Column>
                            <Hero color="primary" size="large" style={{ backgroundImage: `url(${Bottom})`, backgroundPositionX: '38%', backgroundPositionY: '55%', height: '20rem' }}>
                                <Hero.Body style={{ padding: '1rem 1.5rem' }}>
                                    <Content>
                                        <h1>{'A Circumnavigation of Iceland'.toUpperCase()}</h1>
                                        <h5>Explore Iceland's coastal geology by Zodiac or kayak.
                                        Cruise among the icebergs of the Jökulsárlón ice lagoon
                                        in a small boat or go by 4x4 jeep into the highlands of
                                            southern Iceland.</h5>
                                    </Content>
                                </Hero.Body>
                            </Hero>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
            </Columns>
        </Container>
    </Section>
)

export default Projects