import React from 'react'
import { Image, Section } from 'react-bulma-components'
import Logo from '../assets/logo.svg'

const LogoCentered = () => (
    <Section style={{ display: 'flex', justifyContent: 'center', paddingBottom: 0 }}>
        <div style={{ width: 128 }}>
            <Image rounded={false} src={Logo} size="3by2" />
        </div>
    </Section>
)

export default LogoCentered