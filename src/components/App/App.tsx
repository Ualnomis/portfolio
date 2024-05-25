import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { DARK_TOKENS } from '../../constants';
import Home from '../Home';
import About from '../About';
import Skill from '../Skill';
import Project from '../Project';
import Contact from '../Contact';

const App = () => {
  return (
    <Wrapper style={DARK_TOKENS}>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
`;

export default App;
