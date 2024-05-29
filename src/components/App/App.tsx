import styled from 'styled-components';
import NavBar from '../NavBar';
import Home from '../Home';
import About from '../About';
import Skill from '../Skill';
import Project from '../Project';
import Contact from '../Contact';
import Footer from '../Footer';
import SocialMediaSidebar from '../SocialMediaSidebar';
import { MotionConfig } from 'framer-motion';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Wrapper>
        <NavBar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
        <SocialMediaSidebar />
      </Wrapper>
    </MotionConfig>
  );
};

const Wrapper = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
`;

export default App;
