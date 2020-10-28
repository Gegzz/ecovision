import React from 'react'
import { Section, Box, Heading, Image } from 'react-bulma-components'
import { HeadingWithBackground, Space } from '..'
import { ParallaxImage } from '../../assets'
import Tile from '../Tile'
import Tilt from 'react-parallax-tilt'

const max = 4
const tiltEnabled = true

const About = () => (
    <Section style={{ backgroundImage: `url(${ParallaxImage})`, backgroundAttachment: 'fixed', paddingVertical: 200 }}>
        <Space />
        <Tile kind="ancestor">
            <Tile kind="parent" size={6}>
            </Tile>
            <Tile kind="parent" size={6} style={{ backgroundOpacity: 50 }}>
                <Tilt transitionSpeed={2000} tiltMaxAngleX={max} tiltMaxAngleY={max} tiltEnable={tiltEnabled}>
                    <Box style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                        <Heading spaced>ABOUT US</Heading>
                        <Heading subtitle>Union for Sustainable
                        Development - ECOVISION was established
                        in 2001. One of the basic directions of
                        the union is to raise public environmental
                        awareness. ECOVISION has accomplished more
                        than 50 projects, funded by international
                        donor organizations.
                    </Heading>
                    </Box>
                    <Box style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                        <Heading spaced>Vision</Heading>
                        <Heading subtitle>To be a leading non-governmental
                        organization in the field of Environmental Protection and
                        Sustainable Development in Georgia, which has high trust and
                        recognition, both locally and internationally.
                    </Heading>
                    </Box>
                    <Box style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                        <Heading spaced>Mission</Heading>
                        <Heading subtitle>to support the establishment of the
                        long-term vision and mentality, to implement the policy
                        of efficient use of natural resources and therefore to
                        reduce the negative impact of humans on nature.
                        <br />
                        <br />
                        To expand sustainable knowledge, skills, and mindset
                        that motivates individuals to become deeply committed
                        to build a sustainable future and to make informed and
                        effective decisions.
                    </Heading>
                    </Box>
                    <Box style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                        <Heading spaced>Goals</Heading>
                        <Heading subtitle>to support the establishment of the
                        long-term vision and mentality, to implement the policy
                        of efficient use of natural resources and therefore to
                        reduce the negative impact of humans on nature.
                        <br />
                        <br />
                        To expand sustainable knowledge, skills, and mindset
                        that motivates individuals to become deeply committed
                        to build a sustainable future and to make informed and
                        effective decisions.
                    </Heading>
                    </Box>
                </Tilt>
            </Tile>
        </Tile>
        <Space />
    </Section>
)

export default About