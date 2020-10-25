import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Box } from 'react-bulma-components'

import { Navbar, LogoCentered, Header, Projects, Slider, About, Space } from './components'

const newSlider = true

export default () => (
  <>
    <LogoCentered />
    <Section>
      <Container>
        <Navbar />
      </Container>
    </Section>

    {newSlider ? <Slider /> : <Header />}

    <Space />

    <Projects />
    
    <Space />
    
    <About />
    
    <Space />

    <Projects />
  </>
)