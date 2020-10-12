import React from 'react'
import { Hero } from 'react-bulma-components'
import HeaderImage from '../../assets/header-image.png'

const Header = () => (
    <Hero color="primary" size="large" style={{ backgroundImage: `url(${HeaderImage})` }}>
        <Hero.Body style={{ padding: '23rem 1.5rem' }} />
    </Hero>
)

export default Header