import * as React from 'react';
import styled from 'styled-components';

const HTMLStyleTag = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  &:before {
    content: '<';
  }

  &:after {
    content: ' />';
  }
`;

export default HTMLStyleTag;
