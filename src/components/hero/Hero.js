import React from 'react'
import { Heading, Section } from 'react-bulma-components'
import { Tile } from '..'

const Hero = () => (
    <Section>
        <Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile><Heading size={3}>Be the change you wish to see in the world</Heading></Tile>
            <Tile></Tile>
        </Tile>
    </Section>
)

export default Hero