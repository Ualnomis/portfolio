import * as React from 'react';
import styled from 'styled-components';

const MaxWidthWrapper = ({
  children,
  ...delegated
}: React.PropsWithChildren) => {
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  --max-width: 1100px;
  margin-inline: max(128px, 50% - var(--max-width) / 2);
`;

export default MaxWidthWrapper;
