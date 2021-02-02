import React from 'react'
import { Section, Container, Box, Heading } from 'react-bulma-components'

import {
  Header,
  Projects,
  Slider,
  About,
  Space,
  Footer,
} from './components'
import Navbar2 from './components/navbar/Navbar'

const newSlider = true

export default () => (
  <>
    <Section paddingless marginless>
      <Navbar2 />
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
