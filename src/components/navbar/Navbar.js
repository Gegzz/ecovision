import React from 'react'
import { Navbar, Icon } from 'react-bulma-components'
import '@fortawesome/fontawesome-free/css/all.css'
import NavbarItem from './NavbarItem'

const NavigationBar = () => {
    const [active, setActive] = React.useState(false)

    return (
        <Navbar
            active={active}
            transparent={true}
            onClick={() => setActive(!active)}
            style={{ background: 'transparent' }}
        >
            <Navbar.Menu style={{ justifyContent: 'center', width: '100%' }}>
                <NavbarItem text="Home" />
                <NavbarItem text="About" />
                <NavbarItem text="Projects" />
                <NavbarItem text="News" />
                <NavbarItem text="Media" />
                <NavbarItem text="Contact" />
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavigationBar