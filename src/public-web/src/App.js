import React, { } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components'
import Navbar from './components/navbar/Navbar'
import LogoCentered from './components/LogoCentered';

export default () => (
  <>
    <LogoCentered />
    <Section>
      <Container>
        <Navbar />
      </Container>
    </Section>
  </>
)