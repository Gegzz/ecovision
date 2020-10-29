import React from 'react'
import { Heading, Section } from 'react-bulma-components'
import { Tile } from '..'
import Space from '../Space'

const Hero = () => (
    <Section style={{ paddingTop: 0 }}>
        <Tile>
            <Tile></Tile>
            <Tile><Heading size={4} style={{ fontFamily: "'Nixie One', cursive" }}>Be the change you wish to see in the world</Heading></Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile></Tile>
        </Tile>
        <Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile></Tile>
            <Tile><Heading size={6} subtitle>"It is our collective and individual responsibility to preserve and tend to the environment in which we all live."</Heading></Tile>
            <Tile></Tile>
        </Tile>
        {/* <Space /> */}
    </Section>
)

export default Hero