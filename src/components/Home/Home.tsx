import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import { HEADER_HEIGHT, QUERIES } from '../../constants';
import Avatar from '../Avatar';

const Home = () => {
  return (
    <Section>
      <Wrapper>
        <Introduction>
          <NameHeading>
            <HTMLStyleTag>
              Simon<span aria-hidden="true">.</span>
              is
            </HTMLStyleTag>
          </NameHeading>
          <Paragraph>Hey there! I&apos;m Simon Lau.</Paragraph>
          {/* Some for a web developer Animation Later */}
          <Paragraph>A Web Developer.</Paragraph>
          <Paragraph>Based in Toronto, ON, Canada.</Paragraph>
        </Introduction>
        <Avatar />
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  min-height: 100vh;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndDown} {
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled(MaxWidthWrapper)`
  ${HEADER_HEIGHT}
  display: flex;
  align-items: center;
  margin-top: var(--header-height);
  margin-bottom: var(--header-height);
  min-height: 550px;
  flex: 1;
  justify-content: center;
`;

const NameHeading = styled.h1`
  font-size: 2rem;
  font-size: clamp(2rem, 2rem + 4.363636363636364vw, 5rem);
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-size: clamp(1rem, 1rem + 0.7272727272727273vw, 1.5rem);
`;

export default Home;
