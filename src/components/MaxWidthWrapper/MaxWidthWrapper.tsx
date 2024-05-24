import React from 'react';
import styled from 'styled-components';

const MaxWidthWrapper = ({
  children,
  ...delegated
}: React.PropsWithChildren) => {
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
`;

export default MaxWidthWrapper;
