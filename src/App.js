import React from 'react'
import { Section } from 'react-bulma-components'

import {
  Header,
  Projects,
  Slider,
  Space,
  News,
  About,
  Footer,
  Navbar
} from './components'

const newSlider = true

export default () => (
  <>
    <Section paddingless marginless>
      <Navbar />
    </Section>

    {/* <Hero /> */}

    {newSlider ? <Slider /> : <Header />}

    {/* <Space /> */}

    <Projects />

    <Space />

    <News />

    <About />

    <Footer />
  </>
)
