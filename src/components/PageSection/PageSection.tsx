import * as React from 'react';
import HTMLStyleTag from '../HTMLStyleTag';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';

interface Props {
  header: string;
  children: React.ReactNode;
}

const PageSection = ({ header, children }: Props) => {
  return (
    <MaxWidthWrapper>
      <SectionHeader>
        <HTMLStyleTag>{header}</HTMLStyleTag>
      </SectionHeader>
      {children}
    </MaxWidthWrapper>
  );
};

const SectionHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  font-size: 1.75rem;
`;

export default PageSection;
