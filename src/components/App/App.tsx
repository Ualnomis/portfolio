import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import { DARK_TOKENS } from '../../constants';
import Home from '../Home';
import About from '../About';
import Skill from '../Skill';
import Project from '../Project';
import Contact from '../Contact';
import Footer from '../Footer';

const App = () => {
  return (
    <Wrapper style={DARK_TOKENS}>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
`;

export default App;
