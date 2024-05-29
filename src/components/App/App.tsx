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
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';

const HelmetContext = {};

const App = () => {
  return (
    <HelmetProvider context={HelmetContext}>
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
      <SEO
        title="Simon Lau | Ualnoims"
        description="Simon Lau is a software engineer, currently based in Toronto, ON, Canada."
        name="@ual_nomis"
        type="website"
      />
    </HelmetProvider>
  );
};

const Wrapper = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
`;

export default App;
