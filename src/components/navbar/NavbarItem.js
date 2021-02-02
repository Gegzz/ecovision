import React from 'react'
import { Navbar } from 'react-bulma-components'

const NavbarItem = ({ text }) => {
    text = text.toUpperCase()
    return (
        <Navbar.Item style={{ fontWeight: '500', fontFamily: 'Lato, sans-serif' }} href="#">{text}</Navbar.Item>
    )
}

export default NavbarItem