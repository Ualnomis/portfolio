import * as React from 'react';
import HTMLStyleTag from '../HTMLStyleTag';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';

interface Props {
  header: string;
  id: string;
  children: React.ReactNode;
}

const PageSection = ({ header, id, children }: Props) => {
  return (
    <Section id={id}>
      <MaxWidthWrapper>
        <SectionHeader>
          <HTMLStyleTag>{header}</HTMLStyleTag>
        </SectionHeader>
        {children}
      </MaxWidthWrapper>
    </Section>
  );
};

const SectionHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  font-size: 2.5rem;
`;

const Section = styled.section`
  ${HEADER_HEIGHT}
  scroll-margin-top: var(--header-height);
`;

export default PageSection;
