import * as React from 'react';
import styled from 'styled-components';

const HTMLStyleTag = ({ children }: { children: React.ReactChildren }) => {
  return (
    <Wrapper>
      <span aria-hidden="true">{'<'}</span>
      {children}
      <span aria-hidden="true">{' />'}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  white-space: nowrap;
  user-select: none;
`;

export default HTMLStyleTag;
