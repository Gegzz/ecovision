import React from 'react'
import { Hero, Content } from 'react-bulma-components'
import { Header as HeaderImage } from '../../assets'

const Header = () => (
    <Hero color="primary" size="large" style={{ backgroundImage: `url(${HeaderImage})` }}>
        <Hero.Body style={{ padding: '23rem 1.5rem' }}>
            <Content>
                <h1>{'American Southwest National Parks Private Expedition'.toUpperCase()}</h1>
                <h5>{'Camera in hand, venture into world-famous slot canyons, including Zion Narrows and the awe-inspiring Antelope Canyon.'}</h5>
            </Content>
        </Hero.Body>
    </Hero>
)

export default Header