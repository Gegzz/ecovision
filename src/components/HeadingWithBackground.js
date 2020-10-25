import React from 'react'
import { Heading } from 'react-bulma-components'

export default ({ subtitle, style, children }) => (
    <Heading style={{ 
        backgroundColor: '#FFFFFFD2', 
        width: 'fit-content',
        padding: '8px',
        ...style }} subtitle={subtitle}>{children}</Heading>
)