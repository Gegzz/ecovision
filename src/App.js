import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Box, Heading } from 'react-bulma-components'

import { Navbar, LogoCentered, Header, Projects, Slider, About, Space, HeadingWithBackground, Footer, Hero } from './components'

const newSlider = false

export default () => (
  <>
    <LogoCentered />
    <Section>
      <Container>
        <Navbar />
      </Container>
    </Section>

    <Hero />

    {newSlider ? <Slider /> : <Header />}

    {/* <Section style={{ textAlign: 'center' }}>
      <Heading>Union for sustainable development</Heading>
    </Section> */}

    {/* <Space /> */}

    <Projects />

    <Space />

    <About />

    <Space />

    <Footer />
  </>
)