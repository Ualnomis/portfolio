import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';

function Home() {
  return (
    <CenteredMaxWidthWrapper>
      <NameHeading>
        <HTMLStyleTag>Simon.IS</HTMLStyleTag>
      </NameHeading>
      <Intro>Hey there! I&apos;m Simon Lau.</Intro>
      {/* Some for a web developer Animation Later */}
      <Intro>A Web Developer.</Intro>
      <Intro>Based in Toronto, ON, Canada</Intro>
    </CenteredMaxWidthWrapper>
  );
}

const CenteredMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-height: 100vh;
  height: 100vh;
`;

const NameHeading = styled.h1`
  font-size: 2rem;
  font-size: clamp(2rem, 2rem + 4.363636363636364vw, 5rem);
`;

const Intro = styled.p`
  font-size: 1rem;
  font-size: clamp(1rem, 1rem + 0.7272727272727273vw, 1.5rem);
`;

export default Home;
