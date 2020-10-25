import React from 'react'
import { Section, Container, Columns, Content, Hero, Heading, Level, Card, Media, Box } from 'react-bulma-components'
import { Left, Bottom, Kids, Kids2, Header } from '../../assets'
import Tile from '../Tile'
import Carousel, { } from 'react-elastic-carousel'
import './styles.css'
import { HeadingWithBackground } from '..'

const pictures = [
    {
        active: true,
        order: 1,
        url: Header,
        title: 'AMERICAN SOUTHWEST NATIONAL PARKS PRIVATE EXPEDITION',
        subtitle: 'Camera in hand, venture into world-famous slot canyons, including Zion Narrows and the awe-inspiring Antelope Canyon.'
    },
    {
        active: false,
        order: 1,
        url: Header,
        title: 'AMERICAN SOUTHWEST NATIONAL PARKS PRIVATE EXPEDITION',
        subtitle: 'Camera in hand, venture into world-famous slot canyons, including Zion Narrows and the awe-inspiring Antelope Canyon.'
    }
].sort((a, b) => a - b)

const Slider = () => {

    return (
        <Carousel showArrows={false} pagination={false} itemsToShow={1} focusOnSelect={false} enableAutoPlay >
            {pictures.map(pic => (
                <Section style={{ paddingHorizontal: '24px' }}>
                    <Tile kind="ancestor" notification background={Header} style={{
                        minHeight: 512,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div className="content">
                            <HeadingWithBackground >{pic.title}</HeadingWithBackground>
                            <HeadingWithBackground subtitle>{pic.subtitle}</HeadingWithBackground>
                        </div>
                    </Tile>
                </Section>
            ))}
        </Carousel>
    )
}
export default Slider