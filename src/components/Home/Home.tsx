import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import { HEADER_HEIGHT } from '../../constants';

function Home() {
  return (
    <CenteredMaxWidthWrapper>
      <NameHeading>
        <HTMLStyleTag>Simon.IS</HTMLStyleTag>
      </NameHeading>
      <Intro>Hey there, I'm Simon Lau</Intro>
      <Intro>A Web Developer</Intro>
    </CenteredMaxWidthWrapper>
  );
}

const CenteredMaxWidthWrapper = styled(MaxWidthWrapper)`
  ${HEADER_HEIGHT}
  padding-top: var(--header-height);
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
