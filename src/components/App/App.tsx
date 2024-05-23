import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <NameHeading>{`<Simon.IS />`}</NameHeading>
      <Intro>Web Developer</Intro>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NameHeading = styled.h1``;

const Intro = styled.p``;

export default App;
