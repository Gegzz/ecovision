import React from 'react'
import { Heading } from 'react-bulma-components'

const HeadingWithBackground = ({ subtitle, style, children }) => (
    <Heading style={{ 
        backgroundColor: '#FFFFFFD2', 
        width: 'fit-content',
        padding: '8px',
        ...style }} subtitle={subtitle}>{children}</Heading>
)

export default HeadingWithBackground