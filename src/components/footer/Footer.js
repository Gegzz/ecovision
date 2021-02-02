import React from 'react'
import {
  Footer as BulmaFooter,
  Container,
  Heading,
  Form,
  Button
} from 'react-bulma-components'
import Space from '../Space'

const {  Input } = Form

const Footer = () => (
  <BulmaFooter marginless style={{ backgroundColor: '#e3e6da' }}>
    <Container>
      <div
        style={{ maxWidth: 650, textAlign: 'center', margin: 'auto' }}
        class="has-text-centered max-w-650 mx-auto">
        <Heading size={2} style={{ fontWeight: 900 }}>
          Stay in the know
        </Heading>
        <p class="has-text is-size-5">
          Subscribe to our newsletter to get news about our projects.
        </p>
        <Space>
          <form style={{ display: 'flex', textAlign: 'center' }}>
            <Input type="text" placeholder="Your Best Email Address" radiusless />
            <Button color='success' radiusless>SUBSCRIBE</Button>
          </form>
        </Space>
      </div>
      <div class="line"></div>
      <div className="content has-text-centered">
        <p>
          <p>
            <strong>Ecovision</strong> &copy; 2020
          </p>
          Trademark Ecovision is licensed{' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </Container>
  </BulmaFooter>
)

export default Footer
