import React from 'react'
import { Box, Image, Media, Section } from 'react-bulma-components'

const partnersData = [
  'https://uploads-ssl.webflow.com/6009f1101e06f96d7e7ec46c/600bcc282137ed3aa185fcd5_logo-1.png',
  'https://uploads-ssl.webflow.com/6009f1101e06f96d7e7ec46c/600bcc287dcc5185842aea17_logo-2.png',
  'https://uploads-ssl.webflow.com/6009f1101e06f96d7e7ec46c/600bcc285f83967c2f7a1ce5_logo-5.png',
  'https://uploads-ssl.webflow.com/6009f1101e06f96d7e7ec46c/600bcc278f972a6251306995_logo-4.png',
  'https://uploads-ssl.webflow.com/6009f1101e06f96d7e7ec46c/600bcc27aa372231c0190d7b_logo-3.png',
  'https://uploads-ssl.webflow.com/6009f1101e06f96d7e7ec46c/600bcc28ce22ee2372931744_logo-6.png'
]

const Partners = () => (
  <Section>
    <Media flexDirection="row" justifyContent="space-around">
      {partnersData.map((src) => (
        <Media.Content>
          <Image size={128} src={src} />
        </Media.Content>
      ))}
    </Media>
  </Section>
)

export default Partners
