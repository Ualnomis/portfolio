import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import { HEADER_HEIGHT } from '../../constants';

const NavBar = () => {
  return (
    <Wrapper>
      <NavigationMenuRoot>
        <Logo>
          <HTMLStyleTag>Simon</HTMLStyleTag>
        </Logo>
        <NavigationMenuList>
          <NavigationMenu.Item>
            <HTMLStyleTag>About</HTMLStyleTag>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <HTMLStyleTag>SKill</HTMLStyleTag>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <HTMLStyleTag>Project</HTMLStyleTag>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <HTMLStyleTag>Contract</HTMLStyleTag>
          </NavigationMenu.Item>
        </NavigationMenuList>
        <NavigationMenu.Indicator />
      </NavigationMenuRoot>
    </Wrapper>
  );
};

const Logo = styled.div`
  margin-right: auto;
  padding-right: 32px;
  font-size: 3rem;
  color: var(--color-primary);
`;

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  list-style-type: none;
  gap: 32px;
  margin: 0;
  padding: 0;
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
`;

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  height: var(--header-height);
  display: flex;
  align-items: center;
  background: var(--color-background);
`;

export default NavBar;
