import { QUERIES } from '../../constants';
import HTMLStyleTag from '../HTMLStyleTag';
import styled from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import SmoothScrollTo from '../SmoothScrollTo';

function DesktopNavigationMenu() {
  return (
    <NavigationMenuRoot>
      <DesktopNavigationMenuList>
        <NavigationMenu.Item>
          <SmoothScrollTo id="about">
            <HTMLStyleTag>About</HTMLStyleTag>
          </SmoothScrollTo>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <SmoothScrollTo id="skill">
            <HTMLStyleTag>SKill</HTMLStyleTag>
          </SmoothScrollTo>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <SmoothScrollTo id="project">
            <HTMLStyleTag>Project</HTMLStyleTag>
          </SmoothScrollTo>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <SmoothScrollTo id="contact">
            <HTMLStyleTag>Contract</HTMLStyleTag>
          </SmoothScrollTo>
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
