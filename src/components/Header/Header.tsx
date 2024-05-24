import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { HEADER_HEIGHT } from '../../constants';

const Header = () => {
  return (
    <RelativeMaxWidthWrapper>
      <NavigationMenuRoot>
        <Logo>
          <HTMLStyleTag>Simon</HTMLStyleTag>
        </Logo>
        <NavigationMenu.List>
          <HTMLStyleTag>About</HTMLStyleTag>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <HTMLStyleTag>Project</HTMLStyleTag>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <HTMLStyleTag>Resume</HTMLStyleTag>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <HTMLStyleTag>Contract</HTMLStyleTag>
        </NavigationMenu.List>
        <NavigationMenu.Indicator />
      </NavigationMenuRoot>
    </RelativeMaxWidthWrapper>
  );
};

const Logo = styled.div`
  margin-right: auto;
  font-size: 2rem;
  color: var(--color-primary);
`;

const RelativeMaxWidthWrapper = styled(MaxWidthWrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  ${HEADER_HEIGHT}
  height: var(--header-height);
  display: flex;
  align-items: center;
  background: var(--color-background);
`;

export default Header;
