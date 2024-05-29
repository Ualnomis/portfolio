import styled from 'styled-components';
import { QUERIES } from '../../constants';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const linkHoverAnimation = {
  scale: 1.2,
  opacity: 1,
};

const SocialMediaSidebar = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/ualnomis" whileHover={linkHoverAnimation}>
        <Icon icon="line-md:github-loop" aria-hidden={true} />
        <VisuallyHidden.Root>Github</VisuallyHidden.Root>
      </Link>
      <Link
        href="https://www.linkedin.com/in/ualnomis/"
        whileHover={linkHoverAnimation}
      >
        <Icon icon="line-md:linkedin" aria-hidden={true} />
        <VisuallyHidden.Root>LinkedIn</VisuallyHidden.Root>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  left: 32px;
  font-size: 4rem;
  gap: 16px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Link = styled(motion.a)`
  color: inherit;
  opacity: 0.7;
`;

export default SocialMediaSidebar;
