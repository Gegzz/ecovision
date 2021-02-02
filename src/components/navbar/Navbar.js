import React from 'react'
import { Level } from 'react-bulma-components'
import { Logo } from '../../assets'
import NavbarItem from './NavbarItem'

const Navbar2 = () => (
  <Level renderAs="nav" style={{ background: 'transparent', paddingTop: 16, paddingBottom: 24 }}>
    <Level.Item textAlignment="centered">
      <NavbarItem text="Home" />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <NavbarItem text="Projects" />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <NavbarItem text="News" />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <img src={Logo} alt="bulma-logo" style={{ height: 64 }} />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <NavbarItem text="Media" />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <NavbarItem text="About" />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <NavbarItem text="Contact" />
    </Level.Item>
  </Level>
)

export default Navbar2
