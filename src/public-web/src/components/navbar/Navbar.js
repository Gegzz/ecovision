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
        >
            <Navbar.Menu style={{ justifyContent: 'center', width: '100%' }}>
                <NavbarItem text="Home" />
                <NavbarItem text="Category" />
                <NavbarItem text="Features" />
                <NavbarItem text="Blog" />
                <NavbarItem text="Contact" />
                <NavbarItem text="About" />
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavigationBar