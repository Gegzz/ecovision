import React from 'react'
import { Container, Heading } from 'react-bulma-components'
import { Tile } from '../../components'
import Space from '../Space'

const About = () => (
  <Space>
    <Container>
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <Heading size={2} weight="bold" textAlignment="centered">
          Who We Are
        </Heading>
        <Heading size={5} weight="normal">
          &emsp;Union for Sustainable Development - ECOVISION was established in
          2001. One of the basic directions of the union is to raise public
          environmental awareness. ECOVISION has accomplished more than 50
          projects, funded by international donor organizations.
        </Heading>
      </div>
      <Tile
        style={{
          paddingTop: 32,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <Tile size={4} vertical>
          <Heading size={3} weight="bold" textAlignment="centered">
            Vision
          </Heading>
          <Heading size={5} weight="normal">
            &emsp;To be a leading non-governmental organization in the field of
            Environmental Protection and Sustainable Development in Georgia,
            which has high trust and recognition, both locally and
            internationally.
          </Heading>
        </Tile>
        <Tile size={4} vertical>
          <Heading size={3} weight="bold" textAlignment="centered">
            Mission
          </Heading>
          <Heading size={5} weight="normal">
            &emsp;To support the establishment of the long-term vision and
            mentality, to implement the policy of efficient use of natural
            resources and therefore to reduce the negative impact of humans on
            nature.
          </Heading>
        </Tile>
        <Tile size={4} vertical>
          <Heading size={3} weight="bold" textAlignment="centered">
            Goals
          </Heading>
          <Heading size={5} weight="normal">
            &emsp;To expand sustainable knowledge, skills, and mindset that
            motivates individuals to become deeply committed to build a
            sustainable future and to make informed and effective decisions.
          </Heading>
        </Tile>
      </Tile>
    </Container>
  </Space>
)

export default About
