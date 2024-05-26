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
import SocialMediaSidebar from '../SocialMediaSidebar';

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
      <SocialMediaSidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
`;

export default App;
