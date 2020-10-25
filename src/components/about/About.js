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
                        <Heading subtitle>Soultaker is an American fantasy
                        horror film written by Vivian
                        Schilling and directed by Michael
                        Rissi, released on October 26,
                        1990. It stars Joe Estevez in the
                        title role, alongside Schilling,
                        Gregg Thomsen, Chuck Williams,
                        Robert Z'Dar, and David "Shark"
                        Fralick.
                    </Heading>
                        <Heading subtitle>
                            The film follows a group
                            of young adults who try to flee from
                            the Soultaker when their souls are
                            ejected from their bodies after a car
                            accident.
                    </Heading>
                        <Heading subtitle>Philosophy has almost
                        as many definitions as there have been
                        philosophers, both as a subject matter
                        and an activity, and no simple definition
                        can do it justice. The issue of the
                        definition of philosophy is thus a
                        controversial subject that is nowadays
                        tackled by Metaphilosophy (or the philosophy
                        of philosophy).
                    </Heading>
                    </Box>
                </Tilt>
            </Tile>
        </Tile>
        <Space />
    </Section>
)

export default About