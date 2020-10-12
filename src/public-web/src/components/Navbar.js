import React from 'react'
import { Navbar, Icon } from 'react-bulma-components'

const NavigationBar = () => {
    const [active, setActive] = React.useState(false)

    return (
        <Navbar
        color={'primary'}
            active={active}
            transparent={true}
            onClick={() => setActive(!active)}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container>
                    <Navbar.Item href="#">HOME</Navbar.Item>
                    <Navbar.Item href="#">CATEGORY</Navbar.Item>
                    <Navbar.Item href="#">FEATURES</Navbar.Item>
                    <Navbar.Item href="#">BLOG</Navbar.Item>
                    <Navbar.Item href="#">CONTACT</Navbar.Item>
                    <Navbar.Item href="#">ABOUT</Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item href="#"><Icon icon="search" color="primary" /></Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavigationBar