import React from 'react'
import { Section, Box, Heading } from 'react-bulma-components'
import { HeadingWithBackground } from '..'
import { Left, Bottom, Kids, Kids2 } from '../../assets'
import Space from '../Space'
import Tile from '../Tile'

const Projects = (title) => (
    <Section>
        {/* <Space /> */}
        <Space>
            <Heading style={{ textAlign: 'center' }} size={2} weight="normal">Our Highlights</Heading>
        </Space>
        <Tile kind="ancestor">
            <Tile kind="parent" size={6}>
                <Tile renderAs="article" kind="child" notification background={Left}>
                    <div className="content">
                        <HeadingWithBackground>Tall tile</HeadingWithBackground>
                        <HeadingWithBackground subtitle>With even more content</HeadingWithBackground>
                        <div className="content" />
                    </div>
                </Tile>
            </Tile>
            <Tile size={6} vertical>
                <Tile>
                    <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification background={Kids}>
                            <HeadingWithBackground>Middle Tile...</HeadingWithBackground>
                            <HeadingWithBackground subtitle>With image Tile...</HeadingWithBackground>
                            <div className="content" />
                        </Tile>
                    </Tile>
                    <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification background={Kids2}>
                            <HeadingWithBackground>Middle Tile...</HeadingWithBackground>
                            <HeadingWithBackground subtitle>With image Tile...</HeadingWithBackground>
                            <div className="content" />
                        </Tile>
                    </Tile>
                </Tile>
                <Tile kind="parent">
                    <Tile renderAs="article" kind="child" notification background={Bottom}>
                        <HeadingWithBackground>Wide tile</HeadingWithBackground>
                        <HeadingWithBackground subtitle>Aligned with the right tile</HeadingWithBackground>
                        <div className="content" />
                    </Tile>
                </Tile>
            </Tile>
        </Tile>
    </Section>
)

export default Projects