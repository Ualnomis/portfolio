import styled from 'styled-components';
import { QUERIES } from '../../constants';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Icon } from '@iconify/react';

const SocialMediaSidebar = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/ualnomis">
        <Icon icon="line-md:github-loop" aria-hidden={true} />
        <VisuallyHidden.Root>Github</VisuallyHidden.Root>
      </Link>
      <Link href="https://www.linkedin.com/in/ualnomis/">
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

const Link = styled.a`
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export default SocialMediaSidebar;
