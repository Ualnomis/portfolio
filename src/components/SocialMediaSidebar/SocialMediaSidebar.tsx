import * as React from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

function SocialMediaSidebar() {
  return (
    <Wrapper>
      <Link href="https://github.com/ualnomis">
        <IoLogoGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/ualnomis/">
        <IoLogoLinkedin />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  left: 32px;
  font-size: 4rem;
  gap: 16px;
`;

const Link = styled.a`
  color: inherit;
`;

export default SocialMediaSidebar;
