import React from 'react';
import { Section, Container, Box, Heading } from 'react-bulma-components'

import { Navbar, LogoCentered, Header, Projects, Slider, About, Space, HeadingWithBackground, Footer, Hero, Subscribe } from './components'

const newSlider = true

export default () => (
  <>
    <LogoCentered />
    <Heading style={{ textAlign: 'center', padding: 0, marginBottom: -36 }} size={6} subtitle>Union for sustainable development</Heading>
    <Section>
      <Container>
        <Navbar />
      </Container>
    </Section>

    {/* <Hero /> */}

    {newSlider ? <Slider /> : <Header />}

    {/* <Space /> */}

    <Projects />

    <Space />

    <About />

    <Footer />
  </>
)