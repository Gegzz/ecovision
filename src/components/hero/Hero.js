import React from 'react'
import { Heading, Section } from 'react-bulma-components'
import { Tile } from '..'

const Hero = () => (
    <Section>
        <Tile>
            <Tile></Tile>
            <Tile><Heading size={3} style={{ fontFamily: "'Nixie One', cursive" }}>Be the change you wish to see in the world</Heading></Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile></Tile>
        </Tile>
        <Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile><Heading size={5} subtitle>"It is our collective and individual responsibility to preserve and tend to the environment in which we all live."</Heading></Tile>
            <Tile></Tile>
        </Tile>
    </Section>
)

export default Hero