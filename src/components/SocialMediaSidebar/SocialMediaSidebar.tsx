import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { QUERIES } from '../../constants';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const SocialMediaSidebar = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/ualnomis">
        <IoLogoGithub aria-hidden={true} />
        <VisuallyHidden.Root>Github</VisuallyHidden.Root>
      </Link>
      <Link href="https://www.linkedin.com/in/ualnomis/">
        <IoLogoLinkedin aria-hidden={true} />
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
