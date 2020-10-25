import React from 'react'
import { Tile } from 'react-bulma-components'

export default ({
    children,
    className,
    style,
    renderAs,
    kind,
    vertical,
    size,
    color,
    notification,
    background
}) => (
        <Tile
            renderAs={renderAs}
            className={className}
            kind={kind}
            size={size}
            vertical={vertical}
            color={color}
            notification={notification}
            style={{
                backgroundImage: `url(${background})`,
                minHeight: renderAs === 'article' ? 256 : 'unset',
                backgroundSize: 'cover',
                ...style
            }}>
            {children}
        </Tile>
    )