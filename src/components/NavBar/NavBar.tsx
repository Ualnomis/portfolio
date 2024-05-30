import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT, QUERIES } from '../../constants';
import MobileNavigationMenu from '../MobileNavigationMenu';
import DesktopNavigationMenu from '../DesktopNavigationMenu';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Icon } from '@iconify/react';
import AnimatedLogo from '../AnimatedLogo';
import SmoothScrollTo from '../SmoothScrollTo';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <SmoothScrollTo id="home">
        <AnimatedLogo />
        <VisuallyHidden.Root>Home</VisuallyHidden.Root>
      </SmoothScrollTo>
      <DesktopNavigationMenu />
      <MenuButton aria-expanded={isMenuOpen} onClick={toggleIsMenuOpen}>
        <Icon icon="line-md:menu" aria-hidden="true" focusable="false" />
        <VisuallyHidden.Root>Open Nvigation Menu</VisuallyHidden.Root>
      </MenuButton>
      {isMenuOpen && <MobileNavigationMenu handleDismiss={toggleIsMenuOpen} />}
    </Wrapper>
  );
};

const MenuButton = styled.button`
  display: none;
  background: none;
  color: var(--color-text);
  border: 0;
  margin: 0;
  padding: 0;
  font-size: 3rem;
  cursor: pointer;
  opacity: 0.7;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }

  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  ${HEADER_HEIGHT}
  height: var(--header-height);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 32px;
  z-index: 999;
  display: flex;
  align-items: center;
  background: var(--color-background);
  justify-content: space-between;
`;

export default NavBar;
