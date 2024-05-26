import * as React from 'react';
import { QUERIES } from '../../constants';
import HTMLStyleTag from '../HTMLStyleTag';
import styled from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function DesktopNavigationMenu() {
  return (
    <NavigationMenuRoot>
      <DesktopNavigationMenuList>
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
      </DesktopNavigationMenuList>
      <NavigationMenu.Indicator />
    </NavigationMenuRoot>
  );
}

const DesktopNavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  list-style-type: none;
  gap: 32px;
  margin: 0;
  padding: 0;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  height: var(--header-height);
  display: flex;
  align-items: center;
`;

export default DesktopNavigationMenu;
