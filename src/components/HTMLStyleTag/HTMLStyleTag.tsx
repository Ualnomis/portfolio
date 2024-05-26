import * as React from 'react';
import styled from 'styled-components';

const HTMLStyleTag = ({ children }: { children: React.ReactChildren }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  white-space: nowrap;

  &:before {
    content: '<';
  }

  &:after {
    content: ' />';
  }
`;

export default HTMLStyleTag;
