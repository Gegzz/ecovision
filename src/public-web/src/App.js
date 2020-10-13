import React, { } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Columns } from 'react-bulma-components'

import { Navbar, LogoCentered, Header, Projects } from './components'

export default () => (
  <>
    <LogoCentered />
    <Section>
      <Container>
        <Navbar />
      </Container>
    </Section>
    <Header />
    <Projects />
  </>
)