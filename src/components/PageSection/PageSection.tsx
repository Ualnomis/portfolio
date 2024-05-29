import * as React from 'react';
import HTMLStyleTag from '../HTMLStyleTag';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';
import { motion } from 'framer-motion';

interface Props {
  header: string;
  id: string;
  children: React.ReactNode;
}

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const PageSection = ({ header, id, children }: Props) => {
  return (
    <Section id={id}>
      <MaxWidthWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <SectionHeader>
              <HTMLStyleTag>{header}</HTMLStyleTag>
            </SectionHeader>
          </motion.div>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            {children}
          </motion.div>
        </motion.div>
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
