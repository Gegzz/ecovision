import React from 'react'
import { Image, Section, Content } from 'react-bulma-components'
import { Logo } from '../assets'

const LogoCentered = () => (
    <Section style={{ display: 'flex', justifyContent: 'center', paddingBottom: 0 }}>
        <div style={{ width: 128 }}>
            <Image rounded={false} src={Logo} size="3by2" />
            <Content>
                <h3>{'ecovision'.toUpperCase()}</h3>
            </Content>
        </div>
    </Section>
)

export default LogoCentered