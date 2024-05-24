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

const NameHeading = styled.h1``;

const Intro = styled.p``;

export default Home;
